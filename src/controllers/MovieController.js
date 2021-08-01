const { Controller } = require('../utils/controller')
const Movie = require('../models/Movie')

class MovieController extends Controller {
			
	constructor() {		super(Movie)	}}

module.exports = new MovieController()