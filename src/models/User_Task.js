const { DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

module.exports = sequelize.define('User_Task', {	Userid: {
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
}, { 	tableName: 'User_Task',	deletedAt: false,	timestamps: false,})