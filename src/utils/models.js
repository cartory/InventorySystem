const User = require('../models/User')
const Task = require('../models/Task')
const Type = require('../models/Type')
const Unit = require('../models/Unit')
const Place = require('../models/Place')
const Reason = require('../models/Reason')
const Movement = require('../models/Movement')
const User_Task = require('../models/User_Task')
const Equipment = require('../models/Equipment')
const User_Place = require('../models/User_Place')
const Place_Place = require('../models/Place_Place')

// PLACE
Place.belongsToMany(Place, { through: Place_Place, foreignKey: 'placeChild_id', as: 'supPlaces' })
Place.belongsToMany(Place, { through: Place_Place, foreignKey: 'placeParent_id', as: 'places' })

Place.belongsToMany(Equipment, { through: Movement, foreignKey: 'placeTo_id', as: 'equipments' })
Equipment.belongsToMany(Place, { through: Movement, foreignKey: 'Equipmentid', as: 'places' })

Place.belongsTo(Type, { foreignKey: 'Typeid', as: 'type' })
Type.hasMany(Place, { foreignKey: 'Typeid', as: 'places' })

Place.hasMany(Task, { foreignKey: 'Placeid', as: 'tasks' })
Task.belongsTo(Place, { foreignKey: 'Placeid', as: 'place' })

Place.belongsToMany(User, { through: User_Place, foreignKey: 'Userid', as: 'users' })
User.belongsToMany(Place, { through: User_Place, foreignKey: 'Placeid', as: 'places' })

// USER
User.belongsToMany(Task, { through: User_Task, foreignKey: 'Taskid', as: 'tasks' })
Task.belongsToMany(User, { through: User_Task, foreignKey: 'Userid', as: 'users' })

// MOVEMENT
Movement.belongsTo(Reason, { foreignKey: 'Reasonid', as: 'reason' })
Reason.hasMany(Movement, { foreignKey: 'Reasonid', as: 'movements' })

Movement.belongsTo(Equipment, { foreignKey: 'Equipmentid', as: 'equipment' })
Equipment.hasMany(Movement, { foreignKey: 'Equipmentid', as: 'movements' })

Movement.belongsTo(Place, { foreignKey: 'placeFrom_id', as: 'placeFrom' })
Place.hasMany(Movement, { foreignKey: 'placeFrom_id', as: 'movementsFrom' })

Movement.belongsTo(Place, { foreignKey: 'placeTo_id', as: 'placeTo' })
Place.hasMany(Movement, { foreignKey: 'placeTo_id', as: 'movementsTo' })

// EQUIPMENT
Equipment.belongsTo(Unit, { foreignKey: 'Unitid', as: 'unit' })
Unit.hasMany(Equipment, { foreignKey: 'Unitid', as: 'equipments' })

module.exports = {
	User,
	Task,
	Type,
	Unit,
	Place,
	Reason,
	Movement,
	User_Task,
	Equipment,
	User_Place,
	Place_Place,
}