const { Controller } = require('../utils/controller')
const { Type } = require('../utils/models')

class TypeController extends Controller {
	constructor() {
		super(Type)
	}

	all = async ({ query }, res) => { 
		const { page = 0, limit = 10 } = query
		try {
			let types = await Type.findAll({
				offset: page * limit,
				limit: Number.parseInt(limit),
				include: [
					'places'
				]
			})

			return res.status(200).json(types)
		} catch (err) {
			console.error(err);
			return res.status(500).json(this.defaultErrorMessage)
		}
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