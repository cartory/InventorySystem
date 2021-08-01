const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize.instance.js')

class Customer extends Model { }

Customer.init({	ID: {
		key: 'mEmer16GAqACCAWk',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true
	},
	FirstName: {
		key: 'WEmer16GAqACCAWl',
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	LastName: {
		key: 'OEmer16GAqACCAWm',
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Address: {
		key: 'OEmer16GAqACCAWn',
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	BirthDate: {
		key: 'uEmer16GAqACCAWo',
		type: DataTypes.DATE,
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	PhoneNumber: {
		key: 'eEmer16GAqACCAWp',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: true,
		primaryKey: false
	}
}, { sequelize, tableName: 'Customer' })

module.exports = Customer