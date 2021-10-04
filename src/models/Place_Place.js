const { DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

module.exports = sequelize.define('Place_Place', {	placeParent_id: {
		key: 'placeParent_id',
		type: DataTypes.INTEGER(10),
		primaryKey: true,
		references: {
			key: 'id',
			model: 'Place'
		},
	},
	placeChild_id: {
		key: 'placeChild_id',
		type: DataTypes.INTEGER(10),
		primaryKey: true,
		references: {
			key: 'id',
			model: 'Place'
		},
	}
}, { 	tableName: 'Place_Place',	deletedAt: false,	timestamps: false,})