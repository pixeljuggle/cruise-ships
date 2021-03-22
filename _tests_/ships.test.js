const Ship = require("../src/ships");

describe("constructor", () => {
  // Ship {
  //   staringPort
  //   passengersAboard
  //   boardPassenger
  // }

  it("returns an object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("sets the starting port.", () => {
    const cruise = new Ship("Stockport");
    expect(cruise.startingPort).toEqual("Stockport");
  });

  it("sets the passengers aboard.", () => {
    const cruise = new Ship("Stockport", 10);
    expect(cruise.passengersAboard).toEqual(10);
  });

  it("get passengers aboard the ship", () => {
    const cruise = new Ship("Stockport", 10);
    cruise.boardPassenger();
    expect(cruise.passengersAboard).toEqual(11);
  });
});
