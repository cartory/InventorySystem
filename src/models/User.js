const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class User extends Model { }

User.init({	id: {
		key: 'id',
		type: DataTypes.INTEGER(10),
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true
	},
	uid: {
		key: 'uid',
		type: DataTypes.STRING(50),
		unique: true
	},
	name: {
		key: 'name',
		type: DataTypes.STRING(50)
	},
	email: {
		key: 'email',
		type: DataTypes.STRING(50),
		unique: true
	},
	verifiedEmail: {
		key: 'verifiedEmail',
		type: DataTypes.STRING(50),
		unique: true
	},
	photoUrl: {
		key: 'photoUrl',
		type: DataTypes.STRING(255),
		allowNull: true
	},
	password: {
		key: 'password',
		type: DataTypes.STRING(255)
	},
	phoneNumber: {
		key: 'phoneNumber',
		type: DataTypes.STRING(20),
		allowNull: true
	}
}, { 	sequelize, 	tableName: 'User',	deletedAt: true,	timestamps: true,})

module.exports = User