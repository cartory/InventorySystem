const { Controller } = require('../utils/controller')
const User = require('../models/User')

class UserController extends Controller {
	constructor() {		super(User)	}}

module.exports = new UserController()