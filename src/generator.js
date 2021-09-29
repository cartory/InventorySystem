const database = require('../assets/database.json')

const {
	addApiRoutes, generateModel, generateController, generateRoute
} = require('./utils/generator.utils')

let DB = database.map(table => {
	table.marked = false
	return table
})

const getForeignKeys = ({ columns }) => {
	return columns
		.filter(column => column.foreignKey)
		.map(({ foreignKey }) => foreignKey)
}

const getReferencedTables = (tables = [], foreignKeys) => {
	return tables.filter(({ columns }) => {
		return columns.some(({ id }) => foreignKeys.includes(id))
	})
}

const generateFiles = (tables = []) => {
	tables.forEach(table => {
		if (!table.marked) {
			table.marked = true
			let foreignKeys = getForeignKeys(table)
			let referencedTables = getReferencedTables(DB, foreignKeys)
			generateFiles(referencedTables)
			// generate Models
			generateModel(table)
			// generate Controllers
			generateController(table)
			// generate Routes
			generateRoute(table)
		}
	})
}

generateFiles(DB)
addApiRoutes(DB.map(({ tableName }) => tableName))
