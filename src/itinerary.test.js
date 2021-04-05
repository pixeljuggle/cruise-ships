const Itinerary = require("./itinerary");
const Ship = require("./ship");
const Port = require("./port");

describe("Itinerary", () => {
  it("returns an object", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("has ports.", () => {
    const stockport = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: 'Stockport',
      ships: []
    };
  
    const liverpool = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: 'Liverpool',
      ships: []
    };
    const bestCruise = new Itinerary([stockport, liverpool]);

    expect(bestCruise.ports[0]).toEqual(stockport);
    expect(bestCruise.ports[1]).toEqual(liverpool);
  });
});
