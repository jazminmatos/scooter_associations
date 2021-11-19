const {sequelize, DataTypes, Model} = require('../sequelize_index');

class App extends Model {

}

App.init({
    name: DataTypes.STRING,
    users: DataTypes.ARRAY,
    stations: DataTypes.ARRAY
}, {
    sequelize,
    timestamps: false
})

module.exports = {
    App
}