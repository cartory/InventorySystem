const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize.js')

class Type extends Model { }

Type.init({
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
		unique: true,
		allowNull: false
	}
}, {
	sequelize,
	tableName: 'Type'
})

let placeModel = sequelize.model('Place')

Type.hasMany(placeModel, { as: 'places', foreignKey: 'Typeid' })
placeModel.belongsTo(Type, { as: 'type', foreignKey: 'Typeid' })


module.exports = Type