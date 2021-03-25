class Ship {
  constructor(startingPort = "unknown", passengerAboard = 0) {
    this.port = startingPort;
    this.passengersAboard = passengerAboard;
  }

  boardPassenger() {
    return this.passengersAboard++;
  }

  setSail() {
    this.port = null;
  }

  get atSea (){
    return this.port === null
  }
}

module.exports = Ship;
