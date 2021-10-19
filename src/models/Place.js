const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class Place extends Model { }

Place.init({
	id: {
		key: 'id',
		type: DataTypes.INTEGER(10),
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true,
	},
	code: {
		key: 'code',
		type: DataTypes.STRING(20),
		unique: true,
	},
	name: {
		key: 'name',
		type: DataTypes.STRING(255),
	},
	description: {
		key: 'description',
		type: DataTypes.STRING(255),
		allowNull: true,
	},
	Typeid: {
		key: 'Typeid',
		type: DataTypes.INTEGER(10),
		references: {
			key: 'id',
			model: 'Type'
		},
	},
	photoUrl: {
		key: 'photoUrl',
		type: DataTypes.STRING(255),
		allowNull: true,
	}
}, {
	sequelize,
	tableName: 'Place',
	deletedAt: true,
	timestamps: true,
	defaultScope: {
		attributes: {
			exclude: [
				'Typeid'
			]
		}
	}
})

module.exports = Place