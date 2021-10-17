const sequelize = require('../src/utils/sequelize')
// const faker = require('faker')

const data = require('./data.json')

const {
	Unit, Reason, Equipment,
	Place, Type, Place_Place,
} = require('../src/utils/models')

const seedPlaces = ({ places = [], placeParent_id = null, transaction }) => {
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
				transaction,
				places: children,
				placeParent_id: place.getDataValue('id'),
			})
		} catch (err) {
			throw err
		}
	})
}

sequelize
	.authenticate()
	.then(async () => {
		await sequelize.dropAllSchemas({ logging: true })
		await sequelize.sync({ alter: true })
		let transaction = await sequelize.transaction({ autocommit: true, logging: true })

		try {
			await Unit.bulkCreate(data.unit.map(name => ({ name })))
			await Reason.bulkCreate(data.reason.map(name => ({ name })))
			await Type.bulkCreate(data.place_type.map(name => ({ name })))

			seedPlaces({ places: data.place, transaction })
		} catch (err) {
			await transaction.rollback()
			console.error(err);
			process.exit(0)
		}
	})
	.catch(err => console.error(err))