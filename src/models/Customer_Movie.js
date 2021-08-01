const { Model, DataTypes } = require('sequelize')
const sequelize = require('../orm/sequelize.config.js')

class Customer_Movie extends Model { }

Customer_Movie.init({
 	MovieID: {
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true
	},
	CustomerID: {
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true
	},
	Date_Rented: {
		type: DataTypes.TIME,
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Due_Date: {
		type: DataTypes.TIME,
		unique: false,
		allowNull: true,
		primaryKey: false
	}
}, { sequelize })

module.exports = Customer_Movie
