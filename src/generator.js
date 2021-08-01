const fs = require('fs')
const database = require('../assets/database.json')

const keysToDrop = [
	'id', 'name', 'length',
]

const getDataType = {
	byte: (_) => `DataTypes.TINYINT`,
	boolean: (_) => `DataTypes.BOOLEAN`,
	char: (length) => `DataTypes.CHAR(${length})`,

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

const getTableName = (foreignKey) => {
	return database
		.filter(({ columns }) => columns.filter(({ id }) => id === foreignKey))
		.map(({ tableName }) => tableName)?.pop()
}

const generateModel = (table) => {
	let className = table.tableName

	let modelFile = (`const { Model, DataTypes } = require('sequelize')
const sequelize = require('../orm/sequelize.config.js')

class ${className} extends Model { }

${className}.init({
	${table.columns.map((column, index) => {
		let { name, length, key } = column
		keysToDrop.forEach(key => delete column[key])

		return `${index ? '\t' : ''}${name}: {\n${Object.keys(column).map((k, index) => {
			if (k === 'type') {
				return `\t\t${k}: ${getDataType[column[k]](length)}`
			}
			if (k === 'foreignKey') {
				return `\t\treferences: {\n\t\t\tkey: '${column[k]}',\n\t\t\tmodel: '${getTableName(column[k])}'\n\t\t}`
			}
			return `\t\t${k}: ${column[k]}`
		}).join(',\n')}\n\t}`

	}).join(',\t\n')}
}, {
	sequelize,
	tableName: '${table.tableName}'
})

module.exports = ${className}
	`)

	fs.writeFileSync(`src/models/${className}.js`, modelFile, {
		encoding: 'utf-8'
	})
}

module.exports = {
	generateModel
}