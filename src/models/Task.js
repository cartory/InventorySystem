const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class Task extends Model { }

Task.init({	id: {
		key: 'id',
		type: DataTypes.INTEGER(10),
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true
	},
	name: {
		key: 'name',
		type: DataTypes.STRING(50)
	},
	description: {
		key: 'description',
		type: DataTypes.STRING(255),
		allowNull: true
	},
	deadLine: {
		key: 'deadLine',
		type: DataTypes.DATE
	},
	status: {
		key: 'status',
		type: DataTypes.BOOLEAN
	},
	Placeid: {
		key: 'Placeid',
		type: DataTypes.INTEGER(10),
		allowNull: true,
		references: {
			key: 'id',
			model: 'Place'
		}
	}
}, { 	sequelize, 	tableName: 'Task',	deletedAt: true,	timestamps: true,})

module.exports = Task