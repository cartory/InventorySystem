const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize.instance.js')

class Movie extends Model { }

Movie.init({	ID: {
		key: 'ID',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true
	},
	ProducerID: {
		key: 'ProducerID',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: false,
		references: {
			key: 'ID',
			model: 'Producer'
		}
	},
	Title: {
		key: 'Title',
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Duration: {
		key: 'Duration',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Rating: {
		key: 'Rating',
		type: DataTypes.CHAR(1),
		unique: false,
		allowNull: true,
		primaryKey: false
	}
}, { sequelize, tableName: 'Movie' })

module.exports = Movie