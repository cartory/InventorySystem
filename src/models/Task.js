const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')

class Task extends Model { }

Task.init({
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
		type: DataTypes.STRING(50),
		allowNull: false
	},
	description: {
		key: 'description',
		type: DataTypes.STRING(255),
		allowNull: true
	},
	deadLine: {
		key: 'deadLine',
		type: DataTypes.DATE,
		allowNull: false
	},
	status: {
		key: 'status',
		type: DataTypes.BOOLEAN,
		allowNull: false
	},
	Placeid: {
		key: 'Placeid',
		type: DataTypes.INTEGER(10),
		allowNull: true,
		references: {
			key: 'id',
			model: 'Place'
		}
	}
}, {
	sequelize,
	tableName: 'Task'
})

let placeModel = sequelize.model('Place')

placeModel.hasMany(Task, { as: 'tasks', foreignKey: 'Placeid' })
Task.belongsTo(placeModel, { as: 'place', foreignKey: 'Placeid' })

module.exports = Task