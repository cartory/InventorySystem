const fs = require('fs')
let DB = require('../assets/database.json')

let rawJsonDB = JSON.stringify(DB)

while (rawJsonDB.match(/@_/gm)) {
	rawJsonDB = rawJsonDB.replace(/@_/gm, '')
}

fs.writeFileSync('assets/database.json', rawJsonDB, {
	encoding: 'utf-8'
})

const { Project } = JSON.parse(rawJsonDB)

const isAutoIncrement = (identityIncrement, idGenerator) => {
	return identityIncrement < 0 ? idGenerator === 'increment' : true
}

const keyValues = {
	DBTable: Project.Models,
	Model: Project.Models.Model.ModelChildren,
}

const getDBTable = ({ Models }) => {
	let key = Object.keys(Models).find(k => keyValues[k])
	return keyValues[key].DBTable
}

let database = getDBTable(Project).map(table => {
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
