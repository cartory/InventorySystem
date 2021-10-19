const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class Reason extends Model { }

Reason.init({	id: {
		key: 'id',
		type: DataTypes.INTEGER(11),
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true,
	},
	name: {
		key: 'name',
		type: DataTypes.STRING(20),
		unique: true,
	}
}, { 	sequelize, 	tableName: 'Reason',	deletedAt: true,	timestamps: true,})

module.exports = Reason