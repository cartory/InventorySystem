const User = require('../models/User')
const Task = require('../models/Task')
const Type = require('../models/Type')
const Place = require('../models/Place')
const User_Task = require('../models/User_Task')
const User_Place = require('../models/User_Place')
const Place_Place = require('../models/Place_Place')

Place.belongsToMany(Place, { through: Place_Place, foreignKey: 'placeChild_id', as: 'subPlaces' })
Place.belongsToMany(Place, { through: Place_Place, foreignKey: 'placeParent_id', as: 'supPlaces' })

Place.belongsTo(Type, { foreignKey: 'Typeid', as: 'type' })
Type.hasMany(Place, { foreignKey: 'Typeid', as: 'places' })

Place.hasMany(Task, { foreignKey: 'Placeid', as: 'place' })
Task.belongsTo(Place, { foreignKey: 'Placeid', as: 'tasks' })

Place.belongsToMany(User, { through: User_Place, foreignKey: 'Userid', as: 'users' })
User.belongsToMany(Place, { through: User_Place, foreignKey: 'Placeid', as: 'places' })

User.belongsToMany(Task, { through: User_Task, foreignKey: 'Taskid', as: 'tasks' })
Task.belongsToMany(User, { through: User_Task, foreignKey: 'Userid', as: 'users' })

module.exports = {
	User,
	Task,
	Type,
	Place,
	User_Task,
	User_Place,
	Place_Place,
}