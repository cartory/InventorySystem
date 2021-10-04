const { Controller } = require('../utils/controller')
const { Type } = require('../utils/models')

class TypeController extends Controller {
	constructor() {
		super(Type)
	}

	find = async ({ params }, res) => {
		return Type
			.findOne({
				where: { id: params.id },
				include: [
					'places'
				]
			})
			.then(type => res.status(200).json(type))
			.catch(err => {
				console.error(err);
				return res.status(500).json(this.defaultErrorMessage)
			})
	}
}

module.exports = new TypeController()