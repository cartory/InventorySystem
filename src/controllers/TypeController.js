const { Controller } = require('../utils/controller')
const { Type, Place } = require('../utils/models')

class TypeController extends Controller {
	constructor() {
		super(Type)
	}

	all = async (_, res) => {
		try {
			return res.status(200).json(await Type.findAll({
				include: {
					model: Place,
					association: 'places',
				}
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
				include: {
					model: Place,
					association: 'places'
				}
			}))
		} catch (err) {
			console.error(err);
			return res.status(500).json(this.defaultErrorMessage)
		}
	}
}

module.exports = new TypeController()