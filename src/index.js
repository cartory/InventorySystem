const database = require('../assets/database.json')

const {
	addApiRoutes, generateModel, generateController, generateRoute
} = require('./generator')

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
			// generate Models
			generateModel(table)
			// generate Controllores
			generateController(table)
			// generate Route
			generateRoute(table)
		}
	})
}

generateFiles(DB)
addApiRoutes(DB.map(({ tableName }) => tableName))
