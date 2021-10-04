const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class Type extends Model { }

Type.init({	id: {
		key: 'id',
		type: DataTypes.INTEGER(10),
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true
	},
	name: {
		key: 'name',
		type: DataTypes.STRING(50),
		unique: true
	}
}, { 	sequelize, 	tableName: 'Type',	deletedAt: true,	timestamps: true,})

module.exports = Type