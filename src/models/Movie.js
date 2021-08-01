const { Model, DataTypes } = require('sequelize')
const sequelize = require('../orm/sequelize.config.js')

class Movie extends Model { }

Movie.init({
 	ID: {
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true
	},
	ProducerID: {
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: false
	},
	Title: {
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Duration: {
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Rating: {
		type: DataTypes.CHAR,
		unique: false,
		allowNull: true,
		primaryKey: false
	}
}, { sequelize })

module.exports = Movie
