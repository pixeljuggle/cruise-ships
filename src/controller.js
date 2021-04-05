(function exportController() {
  class Controller {
    constructor(ship) {
      this.ship = ship;
      this.initialiseSea();

      document.querySelector("#sailbutton").addEventListener("click", () => {
        this.setSail();
      });
    }

    infoPanel() {
      const infoElement = document.querySelector("#info");

      let shipStatus = "At Sea";
      let nextPort = "End of journey";
      if (this.ship.atSea === false) {
        shipStatus = `Docked At ${this.ship.currentPort.name}`;
      }
      if (this.ship.nextPort) {
        nextPort = `Next Port: ${this.ship.nextPort.name}`
      }
      
      infoElement.innerHTML = `<h3>${shipStatus}</h3>
      <p>${nextPort}</p>`;
    }

    setSail() {
      const ship = this.ship;
      if (!ship.nextPort) {
        const theEndMessage = `Sorry, this is the end of the road, or sea.
Refresh the page to restart`
        return alert(theEndMessage);
      }
      const currentPortIndex = ship.itinerary.indexOf(ship.currentPort);
      ship.setSail();
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );

      const shipElement = document.querySelector("#ship");
      const sailInterval = setInterval(() => {
      const shipLeft = parseInt(shipElement.style.left);
        
        if (shipLeft === nextPortElement.offsetLeft - 30) {
          ship.dock();
          clearInterval(sailInterval);
        }

        shipElement.style.left = `${shipLeft + 1}px`;
        this.infoPanel()
      }, 20);
    }

    initialiseSea() {
      const backgrounds = ["./images/water0.png", "./images/water1.png"];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector("#viewport").style.backgroundImage = `url('${
          backgrounds[backgroundIndex % backgrounds.length]
        }')`;
        backgroundIndex += 1;
      }, 1000);
    }

    renderPorts(ports = []) {
      const portsElement = document.querySelector("#ports");
      portsElement.style.width = "0px";
      ports.forEach((p, i) => {
        const newPort = document.createElement("div");
        newPort.dataset.portName = p.name;
        newPort.dataset.portIndex = i;
        newPort.className = "port";
        newPort.title = p.name;

        portsElement.appendChild(newPort);

        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;

      });
    }

    renderShip() {
      const ship = this.ship;
      const currentPortIndex = ship.itinerary.indexOf(ship.currentPort);
      const portElement = document.querySelector(
        `[data-port-index='${currentPortIndex}']`
      );
      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portElement.offsetTop + 30}px`;
      shipElement.style.left = `${portElement.offsetLeft - 30}px`;
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
