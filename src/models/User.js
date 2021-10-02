const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class User extends Model { }

User.init({
	id: {
		key: 'id',
		type: DataTypes.INTEGER(10),
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true
	},
	uid: {
		key: 'uid',
		type: DataTypes.STRING(50),
		unique: true,
		allowNull: false
	},
	name: {
		key: 'name',
		type: DataTypes.STRING(50),
		allowNull: false
	},
	email: {
		key: 'email',
		type: DataTypes.STRING(50),
		unique: true,
		allowNull: false
	},
	verifiedEmail: {
		key: 'verifiedEmail',
		type: DataTypes.STRING(50),
		unique: true,
		allowNull: false
	},
	photoUrl: {
		key: 'photoUrl',
		type: DataTypes.STRING(255),
		allowNull: true
	},
	password: {
		key: 'password',
		type: DataTypes.STRING(255),
		allowNull: false
	},
	phoneNumber: {
		key: 'phoneNumber',
		type: DataTypes.STRING(20),
		allowNull: true
	}
}, {
	sequelize,
	tableName: 'User'
})

let placeModel = sequelize.model('Place')

User.belongsToMany(placeModel, {
	through: 'User_Place', foreignKey: 'Userid', as: 'places', timestamps: false,
})

placeModel.belongsToMany(User, {
	through: 'User_Place', foreignKey: 'Placeid', as: 'users', timestamps: false,
})

module.exports = User