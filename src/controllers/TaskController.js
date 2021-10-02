const { Controller } = require('../utils/controller')
const Task = require('../models/Task')

class TaskController extends Controller {
	constructor() {		super(Task)	}}

module.exports = new TaskController()