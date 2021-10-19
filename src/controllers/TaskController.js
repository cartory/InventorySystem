const { Controller } = require('../utils/controller')
const { Task } = require('../utils/models')

class TaskController extends Controller {
	constructor() {		super(Task)	}}

module.exports = new TaskController()