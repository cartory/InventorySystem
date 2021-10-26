const { Op } = require('sequelize')
const { Controller } = require('../utils/controller')
const { Equipment, Movement, Place } = require('../utils/models')

class EquipmentController extends Controller {
	constructor() {
		super(Equipment)
	}

	search = async (req, res) => {
		const { query, placeId } = req.query;

		try {
			let equipments = await Equipment.findAll({
				where: {
					[Op.or]: [
						{ code: { [Op.substring]: query } },
						{ description: { [Op.substring]: query } },
						{ observations: { [Op.substring]: query } },
					],
				},
				include: [
					{
						association: 'unit',
						where: {
							[Op.or]: {
								name: {
									[Op.substring]: query
								}
							}
						}
					},
					{
						include: ['type'],
						association: 'places',
						through: { attributes: [] },
						where: placeId ? { id: placeId } : null,
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
				]
			})

			return res.status(200).json(equipments)
		} catch (error) {
			console.error(error);
			return res.status(500).json(this.defaultErrorMessage)
		}
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
						association: 'places',
						include: ['type'],
						where: placeId ? { id: placeId } : null,
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