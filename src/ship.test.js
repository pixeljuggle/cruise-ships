const Ship = require("./ship");
const Port = require("./port");
const Itinerary = require("./itinerary");

describe("Ship", () => {
  let stockport;
  let liverpool;
  let bestCruise;
  let cruise;

  beforeEach(() => {
    stockport = new Port("Stockport");
    liverpool = new Port("Liverpool");
    bestCruise = new Itinerary([stockport, liverpool]);
    cruise = new Ship(bestCruise, 10);
  });

  it("returns an object", () => {
    expect(cruise).toBeInstanceOf(Object);
  });

  it("sets the port.", () => {
    expect(cruise.currentPort.name).toEqual(bestCruise.ports[0].name);
  });

  it("adds the ship to the port.", () => {
    expect(cruise.currentPort.ships).toContain(cruise);
  });

  it("has no previous port.", () => {
    expect(cruise.previousPort).toEqual(null);
  });

  it("sets the passengers aboard.", () => {
    expect(cruise.passengersAboard).toEqual(10);
  });

  it("get passengers aboard the ship", () => {
    cruise.boardPassenger();
    expect(cruise.passengersAboard).toEqual(11);
  });

  it("is not at sea", () => {
    expect(cruise.atSea).toEqual(false);
  });
});

describe("setSail", () => {
  // const stockport = new Port("Stockport");
  // const liverpool = new Port("Liverpool");
  // const bestCruise = new Itinerary([stockport, liverpool]);
  // const cruise = new Ship(bestCruise);

  let stockport;
  let liverpool;
  let bestCruise;
  let cruise;

  beforeEach(() => {
    stockport = new Port("Stockport");
    liverpool = new Port("Liverpool");
    bestCruise = new Itinerary([stockport, liverpool]);
    cruise = new Ship(bestCruise, 10);
    cruise.setSail();
  });

  it("leaves the port", () => {
    expect(cruise.currentPort).toEqual(null);
  });

  it("ship is removed from the port", () => {
    expect(cruise.previousPort.ships).not.toContain(cruise);
  });

  it("is at sea", () => {
    expect(cruise.atSea).toEqual(true);
  });

  it("has a desired destination", () => {
    expect(cruise.nextPort.name).toEqual("Liverpool");
  });

  it("has a previousPort", () => {
    expect(cruise.previousPort.name).toEqual("Stockport");
  });
});

describe("dock", () => {
  // const stockport = new Port("Stockport");
  // const liverpool = new Port("Liverpool");
  // const bestCruise = new Itinerary([stockport, liverpool]);
  // const cruise = new Ship(bestCruise);

  let stockport;
  let liverpool;
  let bestCruise;
  let cruise;

  beforeEach(() => {
    stockport = new Port("Stockport");
    liverpool = new Port("Liverpool");
    bestCruise = new Itinerary([stockport, liverpool]);
    cruise = new Ship(bestCruise, 10);
    cruise.setSail();
    cruise.dock();
  });

  it("can dock at a port", () => {
    expect(cruise.currentPort.name).toEqual("Liverpool");
  });

  it("adds the ship to the port.", () => {
    expect(cruise.currentPort.ships).toContain(cruise);
  });

  it("is at sea", () => {
    expect(cruise.atSea).toEqual(false);
  });

  it("has reached destination", () => {
    expect(cruise.nextPort).toEqual(null);
  });
});
