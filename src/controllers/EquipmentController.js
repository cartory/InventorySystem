const { Controller } = require('../utils/controller')
const { Equipment } = require('../utils/models')

class EquipmentController extends Controller {
	constructor() {		super(Equipment)	}}

module.exports = new EquipmentController()