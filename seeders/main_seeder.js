const sequelizeInstance = require('../src/utils/sequelize')

const faker = require('faker')

const Place = require('../src/models/Place')
const PlaceType = require('../src/models/Type')
const Place_Place = require('../src/models/Place_Place')

const seedPlaces = ({ places = [], placeParent_id = null, transaction }) => {
	places.forEach(async ([code, name, type, children]) => {
		try {
			type = await PlaceType.findOne({ where: { name: type } })

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

sequelizeInstance
	.authenticate()
	.then(async () => {
		// await sequelizeInstance.dropAllSchemas({ logging: true })

		let transaction = await sequelizeInstance.transaction({ autocommit: true, logging: true })

		try {
			// seeding types
			// await PlaceType.bulkCreate(require('./place_type.json'))
			// seeding places
			// seedPlaces({ places, transaction })
		} catch (err) {
			await transaction.rollback()
			console.error(err);
			process.exit(0)
		}
	})
	.catch(err => console.error(err))