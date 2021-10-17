const { DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

module.exports = sequelize.define('Unit', {	id: {
		key: 'id',
		type: DataTypes.INTEGER(11),
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true,
	},
	name: {
		key: 'name',
		type: DataTypes.STRING(10),
		unique: true,
	}
}, { 	tableName: 'Unit',	deletedAt: true,	timestamps: true,})