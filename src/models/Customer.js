const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize.instance.js')

class Customer extends Model { }

Customer.init({	ID: {
		key: 'ID',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true
	},
	FirstName: {
		key: 'FirstName',
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	LastName: {
		key: 'LastName',
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Address: {
		key: 'Address',
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	BirthDate: {
		key: 'BirthDate',
		type: DataTypes.DATE,
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	PhoneNumber: {
		key: 'PhoneNumber',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: true,
		primaryKey: false
	}
}, { sequelize, tableName: 'Customer' })

module.exports = Customer