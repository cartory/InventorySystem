// const fs = require('fs')
const database = require('../assets/database.json')

let DB = database.map(table => {
	table.marked = false
	return table
})

const getForeignKeys = ({ attribs }) => {
	return attribs
		.filter(column => column.foreignKey)
		.map(({ foreignKey }) => foreignKey)
}

const getReferencedTables = (tables, foreignKeys) => {
	return tables.filter(({ attribs }) => {
		return attribs.filter(({ id }) => foreignKeys.includes(id)).length
	})
}

const generateFiles = (tables) => {
	tables.forEach(table => {
		if (!table.marked) {
			let foreignKeys = getForeignKeys(table)
			let referencedTables = getReferencedTables(DB, foreignKeys)
			generateFiles(referencedTables)
			table.marked = true
			console.log(table.tableName);
			// generate Model
			
			// generate Controller
			// generate Route
			// generate View
		}
	})
}

generateFiles(DB)
