const { Controller } = require('../utils/controller')

const Place = require('../models/Place')

class PlaceController extends Controller {
	constructor() {
		super(Place)
	}

	find = async ({ params }, res) => {
		return Place
			.findOne({
				where: { id: params.id },
				include: [
					'type',
					'users',
					'tasks',
					'subPlaces',
				]
			})
			.then(place => res.status(200).json(place))
			.catch(err => {
				console.error(err);
				return res.status(500).json({ err })
			})
	}
}

module.exports = new PlaceController()