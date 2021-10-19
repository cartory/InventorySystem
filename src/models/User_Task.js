const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class User_Task extends Model { }

User_Task.init({	Userid: {
		key: 'Userid',
		type: DataTypes.INTEGER(10),
		primaryKey: true,
		references: {
			key: 'id',
			model: 'User'
		},
	},
	Taskid: {
		key: 'Taskid',
		type: DataTypes.INTEGER(10),
		primaryKey: true,
		references: {
			key: 'id',
			model: 'Task'
		},
	},
	startDate: {
		key: 'startDate',
		type: DataTypes.DATE,
	},
	endDate: {
		key: 'endDate',
		type: DataTypes.DATE,
	}
}, { 	sequelize, 	tableName: 'User_Task',	deletedAt: false,	timestamps: false,})

module.exports = User_Task