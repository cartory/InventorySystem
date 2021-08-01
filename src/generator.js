const fs = require('fs')
const modelJSON = require('./json/model.json')

const columnsToDrop = [
	'id', 'name', 'length', 'foreignKey'
]

const getDataType = {
	char: (_) => `DataTypes.CHAR`,
	byte: (_) => `DataTypes.TINYINT`,
	boolean: (_) => `DataTypes.BOOLEAN`,

	float: (length) => `DataTypes.FLOAT(${length})`,
	double: (length) => `DataTypes.DOUBLE(${length})`,

	int: (length) => `DataTypes.INTEGER(${length})`,
	long: (length) => `DataTypes.BIGINT(${length})`,
	short: (length) => `DataTypes.SMALLINT( ${length})`,

	text: (length) => `DataTypes.TEXT(${length})`,
	string: (length) => `DataTypes.STRING(${length})`,
	varchar: (length) => `DataTypes.STRING(${length})`,

	date: (_) => `DataTypes.DATE`,
	timestamp: (_) => `DataTypes.TIME`,
}

const generateModel = (table) => {
	let className = table.tableName
	let modelFile = `const { Model, DataTypes } = require('sequelize')\n`
	modelFile += `const sequelize = require('../orm/sequelize.config.js')\n\n`

	modelFile += `class ${className} extends Model { }\n\n`

	modelFile += `${className}.init({\n ${table.columns.map((column) => {
		let { name, length } = column

		columnsToDrop.forEach(col => delete column[col])

		return `\t${name}: {\n${Object.keys(column).map(k => {
			if (k === 'type') {
				return `\t\t${k}: ${getDataType[column[k]](length)}`
			}
			return `\t\t${k}: ${column[k]}`
		}).join(',\n')}\n\t}`
	}).join(',\n')}\n}, { sequelize })\n\n`

	modelFile += `${modelJSON.exports} = ${className}\n`

	fs.writeFileSync(`src/models/${className}.js`, modelFile, {
		encoding: 'utf-8'
	})
}

module.exports = {
	generateModel
}