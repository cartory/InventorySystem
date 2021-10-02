const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class Teacher extends Model { }

Teacher.init({
	id: {
		key: 'id',
		type: DataTypes.INTEGER(10),
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true
	},
	name: {
		key: 'name',
		type: DataTypes.STRING(100),
		allowNull: true
	},
	code: {
		key: 'code',
		type: DataTypes.INTEGER(8),
		unique: true,
		allowNull: false
	},
	phoneNumber: {
		key: 'phoneNumber',
		type: DataTypes.INTEGER(10),
		allowNull: true
	},
	email: {
		key: 'email',
		type: DataTypes.INTEGER(10),
		allowNull: true
	}
}, { 
	sequelize, 
	tableName: 'Teacher'
})

module.exports = Teacher