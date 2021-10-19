const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class Movement extends Model { }

Movement.init({
	id: {
		key: 'id',
		type: DataTypes.INTEGER(11),
		primaryKey: true,
		autoIncrement: true,
		autoIncrementIdentity: true,
	},
	Reasonid: {
		key: 'Reasonid',
		type: DataTypes.INTEGER(11),
		references: {
			key: 'id',
			model: 'Reason'
		},
	},
	description: {
		key: 'description',
		type: DataTypes.TEXT,
		allowNull: true,
	},
	Equipmentid: {
		key: 'Equipmentid',
		type: DataTypes.INTEGER(11),
		references: {
			key: 'id',
			model: 'Equipment'
		},
	},
	placeFrom_id: {
		key: 'placeFrom_id',
		type: DataTypes.INTEGER(10),
		allowNull: true,
		references: {
			key: 'id',
			model: 'Place'
		},
	},
	placeTo_id: {
		key: 'placeTo_id',
		type: DataTypes.INTEGER(10),
		allowNull: true,
		references: {
			key: 'id',
			model: 'Place'
		},
	}
}, {
	sequelize,
	tableName: 'Movement',
	paranoid: false,
	timestamps: true,
	defaultScope: {
		attributes: {
			exclude: [
				'placeTo_id', 'placeFrom_id', 'Equipmentid', 'Reasonid',
			]
		}
	}
})

module.exports = Movement