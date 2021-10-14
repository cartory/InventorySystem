const { DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

module.exports = sequelize.define('Movement', {	id: {
		key: 'id',
		type: DataTypes.INTEGER(11),
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true,
	},
	reason: {
		key: 'reason',
		type: DataTypes.STRING(50),
	},
	description: {
		key: 'description',
		type: DataTypes.TEXT(undefined),
		allowNull: true,
	},
	placeFrom_id: {
		key: 'placeFrom_id',
		type: DataTypes.INTEGER(10),
		references: {
			key: 'id',
			model: 'Place'
		},
	},
	placeTo_id: {
		key: 'placeTo_id',
		type: DataTypes.INTEGER(10),
		allowNull: true,
		references: {
			key: 'id',
			model: 'Place'
		},
	},
	Equipmentid: {
		key: 'Equipmentid',
		type: DataTypes.INTEGER(11),
		references: {
			key: 'id',
			model: 'Equipment'
		},
	}
}, { 	tableName: 'Movement',	deletedAt: true,	timestamps: true,})