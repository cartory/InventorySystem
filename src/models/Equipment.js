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
		type: DataTypes.TEXT(undefined),
		allowNull: true,
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
	}
}, { 	tableName: 'Equipment',	deletedAt: true,	timestamps: true,})