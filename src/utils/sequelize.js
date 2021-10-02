const { Sequelize } = require('sequelize')

require('dotenv').config()

module.exports = new Sequelize(
	process.env.DATABASE_URL,
	{
		define: {
			paranoid: true,
			defaultScope: {
				attributes: {
					exclude: [
						'createdAt', 'updatedAt', 'deletedAt'
					]
				}
			}
		}
	}
)