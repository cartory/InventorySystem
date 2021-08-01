const { Controller } = require('../utils/controller')
const Customer = require('../models/Customer')

class CustomerController extends Controller {
	constructor() {		super(Customer)	}}

module.exports = new CustomerController()