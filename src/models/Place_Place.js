const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize.js')

class Place_Place extends Model { }

Place_Place.init({
	placeParent_id: {
		key: 'placeParent_id',
		type: DataTypes.INTEGER(10),
		allowNull: false,
		primaryKey: true,
		references: {
			key: 'id',
			model: 'Place',
		}
	},
	placeChild_id: {
		key: 'placeChild_id',
		type: DataTypes.INTEGER(10),
		allowNull: false,
		primaryKey: true,
		references: {
			key: 'id',
			model: 'Place'
		}
	}
}, {
	sequelize,
	tableName: 'Place_Place'
})

module.exports = Place_Place