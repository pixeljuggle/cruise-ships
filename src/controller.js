(function exportController() {
  class Controller {
    constructor() {
      this.initialiseSea();
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
        if (ship.currentPort === ports[0] && ship.currentPort.name === p.name) {
          newPort.innerHTML = `<div class="portWelcomeSign">Say goodbye to ${p.name}</div>`;
        } else if (ship.currentPort && ship.currentPort.name === p.name) {
          newPort.innerHTML = `<div class="portWelcomeSign">Welcome to ${p.name}</div>`;
        }

        portsElement.appendChild(newPort);

        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    }

    renderShip(ship) {
      const currentPortIndex = ship.itinerary.indexOf(ship.currentPort);
      const portElement = document.querySelector(
        `[data-port-index='${currentPortIndex}']`
      );
      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portElement.offsetTop - 100}px`;
      shipElement.style.left = `${portElement.offsetLeft - 40}px`;
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
