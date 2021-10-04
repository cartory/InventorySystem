const { DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

module.exports = sequelize.define('User_Place', {	Userid: {
		key: 'Userid',
		type: DataTypes.INTEGER(10),
		primaryKey: true,
		references: {
			key: 'id',
			model: 'User'
		},
	},
	Placeid: {
		key: 'Placeid',
		type: DataTypes.INTEGER(10),
		primaryKey: true,
		references: {
			key: 'id',
			model: 'Place'
		},
	},
	startTime: {
		key: 'startTime',
		type: DataTypes.INTEGER(5),
	},
	endTime: {
		key: 'endTime',
		type: DataTypes.INTEGER(5),
	},
	startDate: {
		key: 'startDate',
		type: DataTypes.DATE,
	},
	endDate: {
		key: 'endDate',
		type: DataTypes.DATE,
	}
}, { 	tableName: 'User_Place',	deletedAt: false,	timestamps: false,})