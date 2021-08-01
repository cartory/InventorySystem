const { Controller } = require('../utils/controller')
const Producer = require('../models/Producer')

class ProducerController extends Controller {
	constructor() {		super(Producer)	}}

module.exports = new ProducerController()