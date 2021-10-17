const { Controller } = require('../utils/controller')
const { Reason } = require('../utils/models')

class ReasonController extends Controller {
	constructor() {		super(Reason)	}}

module.exports = new ReasonController()