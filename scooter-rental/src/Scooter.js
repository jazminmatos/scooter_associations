class Scooter {
  constructor(scooterID) {
    this.scooterID = scooterID;
    this.rentStatus = false;
    this.currentChargingStation = "";
    this.isFullyCharged = true;
    this.constructor.allScooters.push(this);
  }

  static allScooters = [];

  isRented() {
    this.rentStatus = !this.rentStatus;
  }

  isCharging(){
    this.isFullyCharged = !this.isFullyCharged;
  }
}

module.exports = Scooter;
