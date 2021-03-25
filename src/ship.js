class Ship {
  constructor(
    itinerary = { ports: [{ name: "The island from Lost" }] },
    passengerAboard = 0
  ) {
    this.itinerary = itinerary.ports;
    this.previousPort = null;
    this.currentPort = itinerary.ports[0];
    this.nextPort = null;
    this.passengersAboard = passengerAboard;
  }

  boardPassenger() {
    return this.passengersAboard++;
  }

  setSail() {
    const nextPortIndex = this.itinerary.indexOf(this.currentPort) + 1;

    if (!this.itinerary[nextPortIndex]) {
      throw new Error("Sorry, nowhere to go !");
    }

    this.previousPort = this.currentPort;
    this.nextPort = this.itinerary[nextPortIndex];
    this.currentPort = null;
  }

  dock() {
    if (!this.atSea) {
      throw new Error("Already docked");
    }
    this.currentPort = this.nextPort;

    const nextPortIndex = this.itinerary.indexOf(this.nextPort) + 1;

    if (!this.itinerary[nextPortIndex]) {
      this.nextPort = null;
    } else {
      this.nextPort = this.itinerary[nextPortIndex];
    }
  }

  get atSea() {
    return this.currentPort === null;
  }
}

module.exports = Ship;
