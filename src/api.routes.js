const { Router } = require('express')
const { addOperationRoutes } = require('./utils/routes.utils')

const controllers = [
	require('./controllers/UserController'),
	require('./controllers/TaskController'),
	require('./controllers/TypeController'),
	require('./controllers/UnitController'),
	require('./controllers/PlaceController'),
	require('./controllers/ReasonController'),
	require('./controllers/MovementController'),
	require('./controllers/EquipmentController')
]

const routes = [
	require('./routes/User.route.json'),
	require('./routes/Task.route.json'),
	require('./routes/Type.route.json'),
	require('./routes/Unit.route.json'),
	require('./routes/Place.route.json'),
	require('./routes/Reason.route.json'),
	require('./routes/Movement.route.json'),
	require('./routes/Equipment.route.json')
]

const router = Router()

routes.forEach((route, index) => {
	addOperationRoutes(router, controllers[index], route)
})

module.exports = router