const { Model, DataTypes } = require('sequelize')
const sequelize = require('../orm/sequelize.config.js')

class Customer extends Model { }

Customer.init({
 	ID: {
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true
	},
	FirstName: {
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	LastName: {
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Address: {
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	BirthDate: {
		type: DataTypes.DATE,
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	PhoneNumber: {
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: true,
		primaryKey: false
	}
}, { sequelize })

module.exports = Customer
