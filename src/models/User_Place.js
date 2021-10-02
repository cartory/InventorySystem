const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class User_Place extends Model { }

User_Place.init({
	Userid: {
		key: 'Userid',
		type: DataTypes.INTEGER(10),
		allowNull: false,
		primaryKey: true,
		references: {
			key: 'id',
			model: 'User'
		}
	},
	Placeid: {
		key: 'Placeid',
		type: DataTypes.INTEGER(10),
		allowNull: false,
		primaryKey: true,
		references: {
			key: 'id',
			model: 'Place'
		}
	},
	startTime: {
		key: 'startTime',
		type: DataTypes.INTEGER(5),
		allowNull: false
	},
	endTime: {
		key: 'endTime',
		type: DataTypes.INTEGER(5),
		allowNull: false
	},
	startDate: {
		key: 'startDate',
		type: DataTypes.DATE,
		allowNull: false
	},
	endDate: {
		key: 'endDate',
		type: DataTypes.DATE,
		allowNull: false
	}
}, { 
	sequelize, 
	tableName: 'User_Place'
})

module.exports = User_Place