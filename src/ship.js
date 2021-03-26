class Ship {
  constructor(
    itinerary = [],
    passengerAboard = 0,
    name = (Math.floor(Math.random() * (9999 - 1000) + 1000))
  ) {
    this.shipName = name;
    this.itinerary = itinerary.ports;
    this.previousPort = null;
    this.currentPort = this.itinerary[0];
    this.currentPort.addShip(this);
    this.nextPort = this.itinerary[1];;
    this.passengersAboard = passengerAboard;
  }

  boardPassenger() {
    return this.passengersAboard++;
  }

  setSail() {
    const nextPortIndex = this.itinerary.indexOf(this.currentPort) + 1;

    if (this.atSea) {
      throw new Error("Already set sail");
    }

    if (!this.itinerary[nextPortIndex]) {
      throw new Error("Sorry, nowhere to go !");
    }
   
    this.currentPort.removeShip(this);

    this.previousPort = this.currentPort;
    this.nextPort = this.itinerary[nextPortIndex];
    this.currentPort = null;
  }

  dock() {
    if (!this.atSea) {
      throw new Error("Already docked");
    }

    this.currentPort = this.nextPort;
    this.currentPort.addShip(this);

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
