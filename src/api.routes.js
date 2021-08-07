const { Router } = require('express')
const { addOperationRoutes } = require('./utils/routes.utils')

const controllers = [
	require('./controllers/MovieController'),
	require('./controllers/CustomerController'),
	require('./controllers/Customer_MovieController'),
	require('./controllers/ProducerController')
]

const routes = [
	require('./routes/Movie.route.json'),
	require('./routes/Customer.route.json'),
	require('./routes/Customer_Movie.route.json'),
	require('./routes/Producer.route.json')
]

const router = Router()

routes.forEach((route, index) => {
	addOperationRoutes(router, controllers[index], route)
})

module.exports = router