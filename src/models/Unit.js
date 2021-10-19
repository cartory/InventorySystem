const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class Unit extends Model { }

Unit.init({
		key: 'id',
		type: DataTypes.INTEGER(11),
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true,
	},
	name: {
		key: 'name',
		type: DataTypes.STRING(10),
		unique: true,
	}
}, { 

module.exports = Unit