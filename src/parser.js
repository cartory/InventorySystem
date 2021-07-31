const fs = require('fs')
const { Project } = require('../assets/database.json')

let database = Project.Models.Model.ModelChildren.DBTable.map(table => {
	let attribs = table.ModelChildren.DBColumn.map(column => {
		let { ForeignKeyConstraints } = column
		return {
			id: column.Id,
			name: column.Name,
			type: column.Type,
			length: column.Length,
			unique: column.Unique,
			nullable: column.Nullable,
			primaryKey: column.PrimaryKey,
			defaultValue: column.DefaultValue,
			identityIncrement: column.IdentityIncrement,
			foreignKey: ForeignKeyConstraints?.DBForeignKeyConstraint['RefColumn'],
		};
	})
	return {
		tableId: table.Id,
		tableName: table.Name,
		attribs,
	};
})

fs.writeFileSync('assets/database.json', JSON.stringify(database), {
	encoding: 'utf-8'
})