const { Router } = require('express')
const { addOperationRoutes } = require('./utils/routes.utils')

const controllers = [
	require('./controllers/UserController'),
	require('./controllers/TaskController'),
	require('./controllers/TypeController'),
	require('./controllers/PlaceController')
]

const routes = [
	require('./routes/User.route.json'),
	require('./routes/Task.route.json'),
	require('./routes/Type.route.json'),
	require('./routes/Place.route.json')
]

const router = Router()

routes.forEach((route, index) => {
	addOperationRoutes(router, controllers[index], route)
})

module.exports = router