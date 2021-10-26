const { Equipment } = require('../utils/models')
const { Controller } = require('../utils/controller')

class EquipmentController extends Controller {
	constructor() {
		super(Equipment)
	}

	all = async (req, res) => {
		const { page = 0, limit = 10, placeId, query } = req.query

		try {
			let equipments = await Equipment.findAll({
				offset: page * limit,
				limit: Number.parseInt(limit),
				include: [
					'unit',
					{
						association: 'places',
						include: ['type'],
						where: placeId ? { id: placeId } : null,
						through: { attributes: [] }
					},
					// {
					// 	association: 'movements',
					// 	include: [
					// 		'reason',
					// 		{
					// 			include: ['type'],
					// 			association: 'placeTo',
					// 		},
					// 		{
					// 			include: ['type'],
					// 			association: 'placeFrom',
					// 		},
					// 	],
					// },
				],
			})

			if (!query) {
				return res.status(200).json(equipments)
			}

			return res.status(200).json(
				equipments.filter(e => {
					let json = e.toJSON()
					return (
						json['code'].toLowerCase().includes(query) ||
						json['description'].toLowerCase().includes(query) ||
						json['unit']['name'].toLowerCase().includes(query) ||
						json['observations'].toLowerCase().includes(query)
					)
				})
			)
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
						include: ['type'],
						association: 'places',
						through: { attributes: [] }
					},
					{
						association: 'movements',
						include: [
							'reason',
							{
								include: ['type'],
								association: 'placeTo',
							},
							{
								include: ['type'],
								association: 'placeFrom',
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