const { Controller } = require('../utils/controller')
const { Equipment, Movement, Place } = require('../utils/models')

class EquipmentController extends Controller {
	constructor() {
		super(Equipment)
	}

	all = async ({ query }, res) => {
		const { page = 0, limit = 10, placeId } = query

		try {
			let equipments = await Equipment.findAll({
				offset: page * limit,
				limit: Number.parseInt(limit),
				include: [
					'unit',
					{
						model: Place,
						as: 'places',
						include: ['type'],
						where: placeId ? { id: placeId } : null,
						through: { attributes: [] }
					},
					{
						model: Movement,
						as: 'movements',
						include: [
							'reason',
							{
								model: Place,
								as: 'placeTo',
								include: ['type']
							},
							{
								model: Place,
								as: 'placeFrom',
								include: ['type']
							},
						],
					},
				]
			})

			return res.status(200).json(equipments)
		} catch (err) {
			console.error(err);
			return res.status(500).json(this.defaultErrorMessage)
		}
	}

	find = async ({ params }, res) => {
		try {
			let equipment = await Equipment.findOne({
				where: { id: params.id },
				include: [
					'unit',
					{
						model: Place,
						as: 'places',
						include: ['type'],
						through: { attributes: [] }
					},
					{
						model: Movement,
						as: 'movements',
						include: [
							'reason',
							{
								model: Place,
								as: 'placeTo',
								include: [
									'type'
								]
							},
							{
								model: Place,
								as: 'placeFrom',
								include: [
									'type'
								]
							},
						],
					},
				],
			})

			return res.status(200).json(equipment)
		} catch (err) {
			console.error(err);
			return res.status(500).json(this.defaultErrorMessage)
		}
	}
}
module.exports = new EquipmentController()