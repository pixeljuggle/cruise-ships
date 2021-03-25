const Ship = require("./ship");
const Port = require("./port");

describe("Ship", () => {
  const stockport = new Port("Stockport");
  const cruise = new Ship(stockport, 10);
  
  it("returns an object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("sets the port.", () => {
    expect(cruise.port).toEqual({"name": "Stockport"});
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
  const cruise = new Ship(stockport, 10);
  cruise.setSail(liverpool);

  it("leaves the port", () => {
    expect(cruise.port).toEqual(null);
  });

  it("is at sea", () => {
    expect(cruise.atSea).toEqual(true);
  });

  it("has a desired destination", () => {
    expect(cruise.destination).toEqual({"name": "Liverpool"});
  });
});

describe("dock", () => {
  const stockport = new Port("Stockport");
  const liverpool = new Port("Liverpool");
  const cruise = new Ship(stockport, 10);
  cruise.setSail(liverpool);
  cruise.dock(liverpool);

  it("can dock at a port", () => {
    expect(cruise.port).toEqual({"name": "Liverpool"});
  });

  it("is at sea", () => {
    expect(cruise.atSea).toEqual(false);
  });

  it("has reached destination", () => {
    expect(cruise.destination).toEqual(null);
  });
});