const { Controller } = require('../utils/controller')
const { Type, Place } = require('../utils/models')
const { fn, col } = require('sequelize')

class TypeController extends Controller {
	constructor() {
		super(Type)
	}

	all = async (_, res) => {
		try {
			return res.status(200).json(await Type.findAll({
				attributes: {
					include: [
						[fn('COUNT', col('places.Typeid')), 'placeCount']
					],
				},
				include: [
					{
						attributes: [],
						association: 'places',
					}
				],
				group: 'places.Typeid',
			}))
		} catch (err) {
			console.error(err);
			return res.status(500).json(this.defaultErrorMessage)
		}
	}

	find = async ({ params }, res) => {
		try {
			return res.status(200).json(await Type.findOne({
				where: { id: params.id },
				include: [
					{
						association: 'places',
						include: ['type']
					}
				]
			}))
		} catch (err) {
			console.error(err);
			return res.status(500).json(this.defaultErrorMessage)
		}
	}
}

module.exports = new TypeController()