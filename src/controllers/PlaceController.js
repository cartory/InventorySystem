const { Controller } = require('../utils/controller')
const { Place } = require('../utils/models')

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