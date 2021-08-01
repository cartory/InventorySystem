const { Model, DataTypes } = require('sequelize')
const sequelize = require('../orm/sequelize.config.js')

class Customer_Movie extends Model { }

Customer_Movie.init({
	MovieID: {
		key: 'hEmer16GAqACCAWr',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true,
		references: {
			key: 'UEmer16GAqACCAWc',
			model: 'Producer'
		}
	},
	CustomerID: {
		key: 'REmer16GAqACCAWt',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true,
		references: {
			key: 'mEmer16GAqACCAWk',
			model: 'Producer'
		}
	},
	Date_Rented: {
		key: 'xEmer16GAqACCAWv',
		type: DataTypes.TIME,
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Due_Date: {
		key: 'JEmer16GAqACCAWw',
		type: DataTypes.TIME,
		unique: false,
		allowNull: true,
		primaryKey: false
	}
}, {
	sequelize,
	tableName: 'Customer_Movie'
})

module.exports = Customer_Movie