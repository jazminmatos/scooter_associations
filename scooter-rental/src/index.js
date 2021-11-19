const {sequelize} = require('../sequelize_index.js');
const {App} = require('../Model/App')
const {User} = require('../Model/User')
const {Station} = require('../Model/Station')
const {Scooter} = require('../Model/Scooter')


App.hasMany(User, {as: "users", foreignKey: "app_id"})
User.belongsTo(App, {foreignKey: "app_id"})


App.hasMany(Station, {as: "stations", foreignKey: "app_id"})
Station.belongsTo(App, {foreignKey: "app_id"})


User.hasMany(Scooter, {as: "scooters", foreignKey: "user_id"})
Scooter.belongsTo(User, {foreignKey: "user_id"})


Station.hasMany(Scooter, {as: "scooters", foreignKey: "station_id" })
Scooter.belongsTo(Station, {foreignKey: "station_id"})


module.exports = { User, App, Station, Scooter}


