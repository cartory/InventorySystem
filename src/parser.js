const fs = require('fs')
const { Project } = require('../assets/database.json')

const isAutoIncrement = (identityIncrement, idGenerator) => {
	return identityIncrement < 0 ? idGenerator === 'increment' : true
}

let database = Project.Models.DBTable.map(table => {
	let columns = table.ModelChildren.DBColumn.map(column => {
		let {
			Id, Name,
			IdGenerator,
			ForeignKeyConstraints,
			DefaultValue, IdentityIncrement,
		} = column

		let json = {
			id: Id,
			key: `${Name}@${Id}`,
			name: Name,
			type: column.Type,
			length: column.Length,
			unique: column.Unique,
			allowNull: column.Nullable,
			primaryKey: column.PrimaryKey,
			defaultValue: DefaultValue ? `'${DefaultValue}'` : null,
			autoIncrement: isAutoIncrement(IdentityIncrement, IdGenerator),
			autoIncrementIdentity: isAutoIncrement(IdentityIncrement, IdGenerator),
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