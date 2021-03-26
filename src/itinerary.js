(function exportItinerary() {
  class Itinerary {
    constructor(ports = []) {
      this.ports = ports;
    }
  
    addPort(destination = "secret") {
      this.ports.push(destination);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Itinerary;
  } else {
    window.Itinerary = Itinerary;
  }
}());