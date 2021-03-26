const Ship = require("./ship");
const Port = require("./port");
const Itinerary = require("./itinerary");

describe("Port", () => {
  
  const stockport = new Port("Stockport");
  const liverpool = new Port("Liverpool");
  const bestCruise = new Itinerary([stockport, liverpool]);
  const cruise = new Ship(bestCruise, 10, "cruise");
  const riverBoat = new Ship(bestCruise, 10, "riverBoat");

  it("returns an object", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("has a name.", () => {
    expect(stockport.name).toEqual("Stockport");
  });

  it("has ships", () => {
    expect(stockport.ships).toBeInstanceOf(Array);
    expect(stockport.ships).toContain(cruise);
    expect(stockport.ships).toContain(riverBoat);
  });
  it("can remove ships", () => {
    riverBoat.setSail();
    expect(stockport.ships).not.toContain(riverBoat);
  });
});
