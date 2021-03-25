const Ship = require("./ship");
const Port = require("./port");
const Itinerary = require("./itinerary");

describe("Ship", () => {
  const stockport = new Port("Stockport");
  const liverpool = new Port("Liverpool");
  const bestCruise = new Itinerary([stockport, liverpool]);
  const cruise = new Ship(bestCruise, 10);

  it("returns an object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("sets the port.", () => {
    expect(cruise.currentPort).toEqual({ name: "Stockport" });
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
  const stockport = new Port("Stockport");
  const liverpool = new Port("Liverpool");
  const bestCruise = new Itinerary([stockport, liverpool]);
  const cruise = new Ship(bestCruise);

  cruise.setSail(liverpool);

  it("leaves the port", () => {
    expect(cruise.currentPort).toEqual(null);
  });

  it("is at sea", () => {
    expect(cruise.atSea).toEqual(true);
  });

  it("has a desired destination", () => {
    expect(cruise.nextPort).toEqual({ name: "Liverpool" });
  });

  it("has a previousPort", () => {
    expect(cruise.previousPort).toEqual({ name: "Stockport" });
  });
});

describe("dock", () => {
  const stockport = new Port("Stockport");
  const liverpool = new Port("Liverpool");
  const bestCruise = new Itinerary([stockport, liverpool]);
  const cruise = new Ship(bestCruise);
  cruise.setSail();
  cruise.dock();

  it("can dock at a port", () => {
    expect(cruise.currentPort).toEqual({ name: "Liverpool" });
  });

  it("is at sea", () => {
    expect(cruise.atSea).toEqual(false);
  });

  it("has reached destination", () => {
    expect(cruise.nextPort).toEqual(null);
  });
});
