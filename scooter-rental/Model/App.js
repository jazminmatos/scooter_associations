const {sequelize, DataTypes, Model} = require('../sequelize_index');

class App extends Model {

}

App.init({
    name: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false
})

module.exports = {
    App
}