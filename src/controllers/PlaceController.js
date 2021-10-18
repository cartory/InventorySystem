const { Controller } = require('../utils/controller')
const { Place, Type } = require('../utils/models')

class PlaceController extends Controller {
	constructor() {
		super(Place)
	}

	all = async ({ query }, res) => {
		const { page = 0, limit = 10 } = query

		try {
			let rootType = await Type.findOne({
				order: [
					['id', 'ASC']
				]
			})

			let places = await Place.findAll({
				offset: page * limit,
				limit: Number.parseInt(limit),
				where: {
					Typeid: rootType?.getDataValue('id')
				},
				include: [
					'type', 'users',
					{
						model: Place,
						as: 'places',
						include: ['type', 'users'],
						through: { attributes: [] },
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
		return Place
			.findOne({
				where: { id: params.id },
				include: [
					'type', 'users',
					{
						model: Place,
						as: 'places',
						include: ['type', 'users'],
						through: { attributes: [] },
					}
				],
			})
			.then(place => res.status(200).json(place))
			.catch(err => {
				console.log(err);
				return res.status(500).json(this.defaultErrorMessage)
			})
	}
}

module.exports = new PlaceController()