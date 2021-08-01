const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize.instance.js')

class Customer_Movie extends Model { }

Customer_Movie.init({	MovieID: {
		key: 'MovieID',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true,
		references: {
			key: 'Country',
			model: 'Movie'
		}
	},
	CustomerID: {
		key: 'CustomerID',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true,
		references: {
			key: 'Country',
			model: 'Customer'
		}
	},
	Date_Rented: {
		key: 'Date_Rented',
		type: DataTypes.TIME,
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Due_Date: {
		key: 'Due_Date',
		type: DataTypes.TIME,
		unique: false,
		allowNull: true,
		primaryKey: false
	}
}, { sequelize, tableName: 'Customer_Movie' })

module.exports = Customer_Movie