const {sequelize, DataTypes, Model} = require('../sequelize_index');

class User extends Model {

}

User.init({
    name: DataTypes.STRING,
    age: DataTypes.NUMBER,
    hasApp: DataTypes.BOOLEAN,
    hasRegistered: DataTypes.BOOLEAN,
    rentedScooter: DataTypes.STRING,
    paymentCard: DataTypes.STRING,    
}, {
    sequelize,
    timestamps: false
})

module.exports = {
    User
}