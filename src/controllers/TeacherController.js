const { Controller } = require('../utils/controller')
const Teacher = require('../models/Teacher')

class TeacherController extends Controller {
	constructor() {		super(Teacher)	}}

module.exports = new TeacherController()