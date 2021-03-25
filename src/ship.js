const Port = require("./port");

class Ship {
  constructor(startingPort = null, passengerAboard = 0) {
    this.port = startingPort;
    this.destination = null;
    this.passengersAboard = passengerAboard;
  }

  boardPassenger() {
    return this.passengersAboard++;
  }

  setSail(destination = "secret") {
    this.port = null;
    this.destination = destination;
  }

  dock(port) {
    this.port = port;
    this.destination = null;
  }

  get atSea (){
    return this.port === null
  }
}

module.exports = Ship;
