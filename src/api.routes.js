const { Router } = require('express')
const { addOperationRoutes } = require('./utils/routes.utils')

const controllers = [
	require('./controllers/PlaceController'),
	require('./controllers/UserController'),
	require('./controllers/TaskController'),
	require('./controllers/User_PlaceController'),
	require('./controllers/User_TaskController'),
	require('./controllers/TeacherController'),
	require('./controllers/TypeController'),
	require('./controllers/Place_PlaceController')
]

const routes = [
	require('./routes/Place.route.json'),
	require('./routes/User.route.json'),
	require('./routes/Task.route.json'),
	require('./routes/User_Place.route.json'),
	require('./routes/User_Task.route.json'),
	require('./routes/Teacher.route.json'),
	require('./routes/Type.route.json'),
	require('./routes/Place_Place.route.json')
]

const router = Router()

routes.forEach((route, index) => {
	addOperationRoutes(router, controllers[index], route)
})

module.exports = router