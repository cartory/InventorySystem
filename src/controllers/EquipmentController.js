const { Controller } = require('../utils/controller')
const { Equipment, Movement } = require('../utils/models')

class EquipmentController extends Controller {
	constructor() {
		super(Equipment)
	}

	all = ({ query }, res) => {
		let { page = 0, limit = 10 } = query
		limit = Number.parseInt(limit) ?? 10

		return Equipment
			.findAll({
				limit,
				offset: page * limit,
				include: [
					'unit',
					{
						model: Movement,
						as: 'movements',
						include: [
							'reason', 'placeFrom', 'placeTo',
						],
					},
				],
			})
			.then(equipment => res.status(200).json(equipment))
			.catch(err => {
				console.error(err);
				return res.status(500).json(this.defaultErrorMessage)
			})
	}
}

module.exports = new EquipmentController()