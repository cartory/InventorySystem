const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize.js')

class Place extends Model { }

Place.init({
	id: {
		key: 'id',
		type: DataTypes.INTEGER(10),
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true
	},
	code: {
		key: 'code',
		type: DataTypes.STRING(20),
		unique: true,
		allowNull: false
	},
	name: {
		key: 'name',
		type: DataTypes.STRING(255),
		allowNull: false
	},
	description: {
		key: 'description',
		type: DataTypes.STRING(255),
		allowNull: true
	},
	photoUrl: {
		key: 'photoUrl',
		allowNull: true,
		type: DataTypes.STRING(255),
	},
	Typeid: {
		key: 'Typeid',
		type: DataTypes.INTEGER(10),
		allowNull: false,
		references: {
			key: 'id',
			model: 'Type'
		}
	}
}, {
	sequelize,
	tableName: 'Place'
})

Place.belongsToMany(Place, {
	through: 'Place_Place', as: 'supPlaces', foreignKey: 'placeChild_id', timestamps: false,
})

Place.belongsToMany(Place, {
	through: 'Place_Place', as: 'subPlaces', foreignKey: 'placeParent_id', timestamps: false,
})

module.exports = Place