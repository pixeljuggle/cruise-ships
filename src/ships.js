class Ship {
  constructor(startingPort = "unknown", passengerAboard = 0) {
    this.startingPort = startingPort;
    this.passengersAboard = passengerAboard;
  }

  boardPassenger() {
    return this.passengersAboard++;
  }
}

module.exports = Ship;
