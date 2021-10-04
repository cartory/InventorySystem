const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class Place_Place extends Model { }

Place_Place.init({	placeParent_id: {
		key: 'placeParent_id',
		type: DataTypes.INTEGER(10),
		primaryKey: true,
		references: {
			key: 'id',
			model: 'Place'
		}
	},
	placeChild_id: {
		key: 'placeChild_id',
		type: DataTypes.INTEGER(10),
		primaryKey: true,
		references: {
			key: 'id',
			model: 'Place'
		}
	}
}, { 	sequelize, 	tableName: 'Place_Place',	deletedAt: false,	timestamps: false,})

module.exports = Place_Place