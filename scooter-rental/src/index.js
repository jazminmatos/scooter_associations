const {sequelize} = require('../sequelize_index.js');
const {App} = require('../Model/App')
const {User} = require('../Model/User')
const {Station} = require('../Model/Station')
const {Scooter} = require('../Model/Scooter')

// App has many Users
// Users belong to an App
App.hasMany(User, {as: "users", foreignKey: "app_id"})
User.belongsTo(App, {foreignKey: "app_id"})


// App has many Stations
// Station belongs to App
App.hasMany(Station, {as: "stations", foreignKey: "app_id"})
Station.belongsTo(App, {foreignKey: "app_id"})


// User has one Scooter
// Scooter belongs to a User
User.hasMany(Scooter, {as: "scooters", foreignKey: "user_id"})
Scooter.belongsTo(User, {foreignKey: "user_id"})


// Scooter belongs to a Station
// Station has many Scooters
Station.hasMany(Scooter, {as: "scooters", foreignKey: "station_id" })
Scooter.belongsTo(Station, {foreignKey: "station_id"})


module.exports = { User, App, Station, Scooter}




// const db = require('../db/db')
// const User = require('../src/User')
// const chalk = require('chalk')
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// // Start app by running node index

// readline.question(chalk.black.bgGreen('Would you like to download the Scooter App? Enter Y for (yes) or N for (no) '), answer => {
//     const res = answer.toUpperCase()
//     if (res === 'Y') {
//         console.log(chalk.cyan.inverse('\nAwesome! Thank you for downloading the Scooter App! \n'))
//         readline.question(chalk.black.bgGreen('In order to use the app, you will need to create an account, please enter your name '), (name) => {
//             const user = new User(name)
//             user.downloadApp(db.app)
//             console.log(user)
//             console.log(chalk.cyan.inverse(`\nHi, ${name} thanks for creating an account, Now you must register.`))

//             readline.question(chalk.black.bgGreen(`\n To register enter your credit card number (SPACE) followed by your age. (Must be at least 18 years old to use the app) `), (cardAndAge) => {
//                 let info = cardAndAge.split(' ')
//                 let cardNum = info[0]
//                 let age = parseInt(info[1])
//                 if (age < 18) {
//                     console.log('Sorry, you must be at least 18 years old to register :(')
//                     readline.close()
//                 } else {
//                     user.registerUser(cardNum, age)
//                     console.log(user)

//                     readline.question(chalk.black.bgGreen('Would you like to rent a scooter? Enter Y for (yes) and N for (no) '), (answer) => {
//                         const res = answer.toUpperCase()
//                         if (res === 'Y') {
//                             console.log(chalk.cyan.inverse('\nGreat! lets find you a fully charged scooter at one of our stations \n'))

//                             setTimeout(() => {
//                                 console.log('\n', db.stations[0],'\n')
//                                 db.app.findStationAndScooter(user)

//                                 setTimeout(() => {
//                                     console.log(chalk.cyan.inverse('\nNo worries, I can add a scooter to that station in just a moment'))
//                                     db.stations[0].addScooter(db.scooters[0])
//                                     db.app.addStation(db.stations[0])

//                                     setTimeout(() => {
//                                         console.log('\n', db.stations[0])
//                                         console.log(chalk.cyan.inverse('There! now lets try it again\n'))
//                                         db.app.findStationAndScooter(user)

//                                         setTimeout(() => {
//                                             console.log(chalk.cyan.inverse(`Nice!!! you are all set! you rented Scooter #${user.rentedScooter} from ${db.stations[0].name} ENJOY!!!\n`))

//                                             setTimeout(() => {
//                                                 console.log(db.stations[0])

//                                                 setTimeout(() => {
//                                                     console.log(db.scooters[0])

//                                                     setTimeout(() => {
//                                                         console.log(chalk.cyan.inverse("\nWhen you're ready to return the scooter just find your nearest charging station and drop it off :)\n"))
                                                        
//                                                         setTimeout(() => {
//                                                             console.log(chalk.yellow('weeeeeeeeeee\n'))

//                                                             setTimeout(() => {
//                                                                 console.log(chalk.yellow('this is awesome!!!!!\n'))

//                                                                 setTimeout(() => {
//                                                                     console.log(chalk.yellow(`Ok let me return the scooter now, i see a station close by\n`))

//                                                                     setTimeout(() => {
//                                                                         user.returnScooter(db.stations[1])

//                                                                         setTimeout(() => {
//                                                                             console.log('\n', db.scooters[0])

//                                                                             setTimeout(()=>{
//                                                                                 console.log('\n', db.stations[1])

//                                                                                 setTimeout(()=> {
//                                                                                     console.log(chalk.cyan.inverse('\nThanks for using the Scooter Rental App, Hope you liked it! :)\n'))
//                                                                                     readline.close()
//                                                                                 },2000)
//                                                                             },4000)
//                                                                         },4000)
//                                                                     }, 4000)
//                                                                 }, 3000)
//                                                             }, 4000)

//                                                         }, 5000)
//                                                     }, 7000)
//                                                 }, 7000)
//                                             }, 7000)
//                                         }, 7000)
//                                     }, 8000)
//                                 }, 6000)
//                             }, 6000)
//                         } else {
//                             console.log('Comeback when you want to ride our awesome scooters!!')
//                             readline.close()
//                           }
//                     })
//                 }
//             })
//         })
//     }   else {
//             console.log('Are you sure you dont want to download the app? Come on, at least try it!')
//             readline.close()
//         }
// })