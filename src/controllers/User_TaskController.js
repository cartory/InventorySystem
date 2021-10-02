const { Controller } = require('../utils/controller')
const User_Task = require('../models/User_Task')

class User_TaskController extends Controller {
	constructor() {		super(User_Task)	}}

module.exports = new User_TaskController()