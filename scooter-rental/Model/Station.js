const {sequelize, DataTypes, Model} = require('../sequelize_index');

class Station extends Model {

}

Station.init({
    name: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false
})

module.exports = {
    Station
}