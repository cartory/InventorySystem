const sequelize = require('../src/utils/sequelize')

// const faker = require('faker')

const data = require('./data.json')
const { modules } = require('./csv_parser')

const {
	Unit, Reason, Equipment, Movement,
	Place, Type, Place_Place,
} = require('../src/utils/models')

const seedPlaces = ({ places = [], placeParent_id = null }) => {
	places.forEach(async ([code, name, type, children]) => {
		try {
			type = await Type.findOne({ where: { name: type } })

			let place = await Place.create({
				code,
				name,
				description: name,
				Typeid: type.getDataValue('id'),
			})

			if (placeParent_id) {
				await Place_Place.create({
					placeParent_id,
					placeChild_id: place.getDataValue('id'),
				})
			}

			seedPlaces({
				places: children,
				placeParent_id: place.getDataValue('id'),
			})
		} catch (err) {
			throw err
		}
	})
}

const seedEquipments = ({ module, rooms = [], Reasonid }) => {
	rooms.forEach(room => {
		const equipments = require(`./json/${module}-${room}.json`)
		equipments.forEach(async equipment => {
			try {
				let placeTo = await Place.findOne({ where: { code: room } })
				let unit = await Unit.findOne({ where: { name: equipment.Unitid } })

				equipment = await Equipment.create({
					...equipment,
					Unitid: unit?.getDataValue('id'),
				})

				await Movement.create({
					Reasonid,
					placeTo_id: placeTo?.getDataValue('id'),
					Equipmentid: equipment?.getDataValue('id'),
				})

			} catch (error) {
				console.error(error)
				process.exit(0)
			}
		})
	})
}

sequelize
	.authenticate()
	.then(async () => {
		await sequelize.dropAllSchemas({ logging: true })
		await sequelize.sync({ alter: true })
		try {
			await Unit.bulkCreate(data.unit.map(name => ({ name })))
			await Reason.bulkCreate(data.reason.map(name => ({ name })))
			await Type.bulkCreate(data.place_type.map(name => ({ name })))

			seedPlaces({ places: data.place })

			let reason = await Reason.findOne({ where: { name: 'transaction' } })
			modules.forEach(([module, rooms]) => {
				seedEquipments({
					module, rooms,
					Reasonid: reason?.getDataValue('id')
				})
			})
		} catch (err) {
			console.error(err);
			process.exit(0)
		}
	})
	.catch(err => console.error(err))