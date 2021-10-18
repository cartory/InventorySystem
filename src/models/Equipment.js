const { DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

module.exports = sequelize.define('Equipment', {	id: {
		key: 'id',
		type: DataTypes.INTEGER(11),
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true,
	},
	description: {
		key: 'description',
		type: DataTypes.TEXT,
	},
	code: {
		key: 'code',
		type: DataTypes.STRING(100),
		unique: true,
	},
	photoUrl: {
		key: 'photoUrl',
		type: DataTypes.STRING(255),
		allowNull: true,
	},
	state: {
		key: 'state',
		type: DataTypes.STRING(50),
	},
	observations: {
		key: 'observations',
		type: DataTypes.TEXT,
		allowNull: true,
	},
	Unitid: {
		key: 'Unitid',
		type: DataTypes.INTEGER(11),
		references: {
			key: 'id',
			model: 'Unit'
		},
	}
}, { 	tableName: 'Equipment',	deletedAt: true,	timestamps: true,})