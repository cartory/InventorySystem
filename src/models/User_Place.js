const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class User_Place extends Model { }

User_Place.init({	Userid: {
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
}, { 	sequelize, 	tableName: 'User_Place',	deletedAt: false,	timestamps: false,})

module.exports = User_Place