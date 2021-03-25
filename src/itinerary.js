class Itinerary {
  constructor(ports = []) {
    this.ports = ports;
  }

  addPort(destination = "secret") {
    this.ports.push(destination);
  }
}

module.exports = Itinerary;
