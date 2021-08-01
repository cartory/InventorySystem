const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize.instance.js')

class Producer extends Model { }

Producer.init({	ID: {
		key: 'ZEmer16GAqACCAWy',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true
	},
	CompanyName: {
		key: 'FEmer16GAqACCAWz',
		type: DataTypes.STRING(200),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Country: {
		key: 'lEmer16GAqACCAW0',
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false,
		defaultValue: 'Bolivia'
	}
}, { sequelize, tableName: 'Producer' })

module.exports = Producer