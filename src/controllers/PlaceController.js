const { Controller } = require('../utils/controller')
const { Place, Type } = require('../utils/models')

class PlaceController extends Controller {
	constructor() {
		super(Place)
	}

	all = async ({ query }, res) => {
		const { page = 0, limit = 10 } = query

		try {
			const type = await Type.findOne({
				order: [['id', 'ASC']]
			})

			let places = await Place.findAll({
				offset: page * limit,
				limit: Number.parseInt(limit),
				where: {
					Typeid: type?.getDataValue('id')
				},
				include: [
					'type', 'tasks',
					{
						model: Place,
						as: 'places',
						through: { attributes: [] },
						include: [
							'type', 'tasks',
						],
					}
				],
			})

			return res.status(200).json(places)
		} catch (err) {
			console.error(err);
			return res.status(500).json(this.defaultErrorMessage)
		}

	}

	find = async ({ params }, res) => {
		try {
			let place = await Place.findOne({
				where: { id: params.id },
				include: [
					'type', 'tasks',
					{
						model: Place,
						association: 'places',
						through: { attributes: [] },
						include: [
							'type', 'tasks',
						],
					}
				],
			})

			return res.status(200).json(place)
		} catch (err) {
			console.error(err);
			return res.status(500).json(this.defaultErrorMessage)
		}
	}
}

module.exports = new PlaceController()