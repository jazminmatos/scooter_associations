const Station = require('../src/Station')
const Scooter = require('../src/Scooter')
const User = require('../src/User')

class App {
    constructor(name) {
        this.name = name
        this.users = []
        this.stations = []
    }

    addUser(user) {
        this.users.push(user)
    }

    addStation(station) {
        this.stations.push(station)
    }

    findStationAndScooter(user) {
        const station = this.stations.find(charStat => charStat.scooters.length > 0)

        if (station) {
            const scooter = station.scooters.find(s => s.isFullyCharged === true)
            user.rentScooter(scooter)
            scooter.isRented()
        } else {
            console.log("...That's awkward. We have no more scooters...")
            return "...That's awkward. We have no more scooters..."
        }
    }

    collectPayment(user) {
        console.log(`Thank you for paying ${user.name}`)
        return "Thank you" 
    }
}

module.exports = App;