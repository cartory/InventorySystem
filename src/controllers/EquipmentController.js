const { Controller } = require('../utils/controller')
const { Equipment, Movement, Place } = require('../utils/models')

class EquipmentController extends Controller {
	constructor() {
		super(Equipment)
	}

	all = async ({ query }, res) => {
		const { page = 0, limit = 10 } = query

		return Equipment
			.findAll({
				offset: page * limit,
				limit: Number.parseInt(limit),
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

	find = async ({ query }, res) => {
		const { page = 0, limit = 10, placeId } = query

		let include = [
			'unit',
			{
				as: 'movements',
				model: Movement,
				include: [
					'reason', 'placeFrom', 'placeTo'
				],
			}
		]
		
		if (placeId) {
			include.push({
				as: 'places',
				model: Place,
				attributes: [],
				where: { id: placeId },
				through: { attributes: [] },
			})
		}

		return Equipment
			.findAll({
				include: include,
				offset: page * limit,
				limit: Number.parseInt(limit),
			})
			.then(equipment => res.status(200).json(equipment))
			.catch(err => {
				console.error(err)
				return res.status(500).json(this.defaultErrorMessage)
			})

	}
}

module.exports = new EquipmentController()