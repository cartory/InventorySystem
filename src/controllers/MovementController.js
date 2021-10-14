const { Controller } = require('../utils/controller')
const { Movement } = require('../utils/models')

class MovementController extends Controller {
	constructor() {		super(Movement)	}}

module.exports = new MovementController()