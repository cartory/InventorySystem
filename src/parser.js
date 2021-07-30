const fs = require('fs')
const { Project } = require('../assets/info.json')

let database = Project.Models.Model.ModelChildren.DBTable.map(table => {
	let attribs = table.ModelChildren.DBColumn.map(column => {
		let { ForeignKeyConstraints } = column
		return {
			Id: column.Id,
			Name: column.Name,
			Type: column.Type,
			Length: column.Length,
			Unique: column.Unique,
			Nullable: column.Nullable,
			PrimaryKey: column.PrimaryKey,
			DefaultValue: column.DefaultValue,
			IdentityIncrement: column.IdentityIncrement,
			ForeignKeyConstraints: ForeignKeyConstraints?.DBForeignKeyConstraint['RefColumn'],
		};
	})
	return {
		tableId: table.Id,
		tableName: table.Name,
		attribs,
	};
})

fs.writeFileSync('assets/info.json', JSON.stringify(database), {
	encoding: 'utf-8'
})