const { Controller } = require('../utils/controller')
const Type = require('../models/Type')

class TypeController extends Controller {
	constructor() {		super(Type)	}}

module.exports = new TypeController()