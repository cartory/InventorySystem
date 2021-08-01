const { Controller } = require('../utils/controller')
const Customer_Movie = require('../models/Customer_Movie')

class Customer_MovieController extends Controller {
	constructor() {		super(Customer_Movie)	}}

module.exports = new Customer_MovieController()