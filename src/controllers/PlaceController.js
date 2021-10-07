const { Controller } = require('../utils/controller')
const { Place } = require('../utils/models')

class PlaceController extends Controller {
	constructor() {
		super(Place)
	}

	all = async (_, res) => {
		return Place
			.findAll({
				include: ['type'],
				order: [
					['id', 'ASC'],
				],
			})
			.then(places => res.status(200).json(places))
			.catch(err => {
				console.error(err);
				return res.status(500).json(this.defaultErrorMessage)
			})
	}

	find = async ({ params }, res) => {
		return Place
			.findOne({
				where: { id: params.id },
				include: [
					'type', 'users', 'tasks',
					{
						model: Place,
						as: 'places',
						include: ['type', 'users', 'tasks'],
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