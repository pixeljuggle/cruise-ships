const Ship = require("./ships");

describe("Ship", () => {
  const cruise = new Ship("Stockport", 10);

  it("returns an object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("sets the starting port.", () => {
    expect(cruise.port).toEqual("Stockport");
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
  const cruise = new Ship("Stockport");
  cruise.setSail();

  it("leaves the port", () => {
    expect(cruise.port).toEqual(null);
  });

  it("is at sea", () => {
    expect(cruise.atSea).toEqual(true);
  });
});
