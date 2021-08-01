const { Model, DataTypes } = require('sequelize')
const sequelize = require('../orm/sequelize.config.js')

class Producer extends Model { }

Producer.init({
 	ID: {
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true
	},
	CompanyName: {
		type: DataTypes.STRING(200),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Country: {
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false,
		defaultValue: 'Bolivia'
	}
}, { sequelize })

module.exports = Producer
