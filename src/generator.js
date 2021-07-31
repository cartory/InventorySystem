const fs = require('fs')

const generateModel = (table) => {
	let className = table.tableName
	let model = (`
const { DataTypes, Model } = require('sequelize')\nconst sequelize = require('../orm/sequelize.config')
class ${className} extends Model { }
		
${className}.init({
	// MUST DECLARE ATTRIBS
}, {
	sequelize
})

module.exports = ${className}
	`)

	fs.writeFileSync(`src/models/${className}.js`, model, {
		encoding: 'utf-8'
	})
}

module.exports = {
	generateModel
}