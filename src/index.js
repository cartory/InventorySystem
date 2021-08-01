// const fs = require('fs')
const database = require('../assets/database.json')
const { generateModel } = require('./generator')

let DB = database.map(table => {
	table.marked = false
	return table
})

const getForeignKeys = ({ columns }) => {
	return columns
		.filter(column => column.foreignKey)
		.map(({ foreignKey }) => foreignKey)
}

const getReferencedTables = (tables, foreignKeys) => {
	return tables.filter(({ columns }) => {
		return columns.filter(({ id }) => foreignKeys.includes(id)).length
	})
}

const generateFiles = (tables) => {
	tables.forEach(table => {
		if (!table.marked) {
			let foreignKeys = getForeignKeys(table)
			let referencedTables = getReferencedTables(DB, foreignKeys)
			generateFiles(referencedTables)
			table.marked = true
			console.log('table generated => ', table.tableName);
			generateModel(table)
		}
	})
}

generateFiles(DB)
