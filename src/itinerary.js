(function exportItinerary() {

  const lost = {
    "name": "The Island, from Lost!.",
    "ships": [
        {
            "shipName": "Black Rock",
            "itinerary": [],
            "previousPort": null,
            "currentPort": {
                "name": "The Island, from Lost!."
            },
            "nextPort": null,
            "passengersAboard": 0
        }
    ]
}
  class Itinerary {
    constructor(ports = [lost]) {
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