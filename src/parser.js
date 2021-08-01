const fs = require('fs')
const { Project } = require('../assets/database.json')

let database = Project.Models.Model.ModelChildren.DBTable.map(table => {
	let columns = table.ModelChildren.DBColumn.map(column => {
		let { Id, ForeignKeyConstraints, DefaultValue, IdentityIncrement } = column
		let json = {
			id: Id,
			key: `'${Id}'`,
			name: column.Name,
			type: column.Type,
			length: column.Length,
			unique: column.Unique,
			allowNull: column.Nullable,
			primaryKey: column.PrimaryKey,
			defaultValue: DefaultValue ? `'${DefaultValue}'` : null,
			autoIncrement: IdentityIncrement < 0 ? null : true,
			autoIncrementIdentity: IdentityIncrement < 0 ? null : true,
			foreignKey: ForeignKeyConstraints?.DBForeignKeyConstraint['RefColumn'],
		};

		for (const key in json) {
			if (json[key] === null || json[key] === undefined) {
				delete json[key]
			}
		}
		return json
	})
	return {
		tableId: table.Id,
		tableName: table.Name,
		columns,
	};
})

fs.writeFileSync('assets/database.json', JSON.stringify(database), {
	encoding: 'utf-8'
})