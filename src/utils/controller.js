const { Model } = require('sequelize')
const { Request, Response } = require('express')
const sequelizeInstance = require('./sequelize.instance')

const defaultErrorMessage = {
	status: 500,
	message: '⚠️ Ups!, Something goes Wrong !!⚠️'
}

class Controller {
	/**
	 * Sequelize Model
	 * @param {Model} model 
	 */
	constructor(model) {
		this.model = model
	}

	/**
	 * Fetch Data from Table as Rows
	 * @param {Request} _ 
	 * @param {Response} res
	 */
	async all(_, res) {
		let t = await sequelizeInstance.transaction({ autocommit: true })
		return this.model
			.findAll()
			.then(data => res.status(200).json(data))
			.catch(async err => {
				console.error(err)
				await t.rollback()
				return res.status(500).json(defaultErrorMessage)
			})
	}

	/**
	 * Fetch one Row from Table
	 * @param {Request} req 
	 * @param {Response} res 
	 */
	async find(req, res) {
		let t = await sequelizeInstance.transaction({ autocommit: true })
		return this.model
			.findOne({ where: { id: req.params.id }, transaction: t })
			.then(data => res.status(200).json(data))
			.catch(async err => {
				console.error(err)
				await t.rollback()
				return res.status(500).json(defaultErrorMessage)
			})
	}

	/**
	 * Store/Update Row from DB
	 * @param {Request} req 
	 * @param {Response} res
	 */
	async save(req, res) {
		let t = await sequelizeInstance.transaction({ autocommit: true })

		return this.model
			.upsert(req.body, { transaction: t })
			.then(data => res.status(200).json(data))
			.catch(async err => {
				console.error(err)
				await t.rollback()
				return res.status(500).json(defaultErrorMessage)
			})
	}

	/**
	 * Destroy row from DB 
	 * @param {Request} req 
	 * @param {Response} res 
	 */
	async destroy(req, res) {
		let t = await sequelizeInstance.transaction({ autocommit: true })

		return this.model
			.destroy({
				transaction: t,
				where: { id: req.params.id },
			})
			.then(data => res.status(200).json(data))
			.catch(async err => {
				console.error(err)
				await t.rollback()
				return res.status(500).json(defaultErrorMessage)
			})
	}
}

module.exports = {
	Controller,
	defaultErrorMessage,
}