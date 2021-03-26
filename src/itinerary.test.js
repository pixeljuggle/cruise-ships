const Itinerary = require("./itinerary");
const Ship = require("./ship");
const Port = require("./port");

describe("Itinerary", () => {
  it("returns an object", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("has ports.", () => {
    const stockport = new Port("Stockport");
    const liverpool = new Port("Liverpool");
    const bestCruise = new Itinerary([stockport, liverpool]);

    expect(bestCruise.ports[0]).toEqual(stockport);
    expect(bestCruise.ports[1]).toEqual(liverpool);
  });
});
