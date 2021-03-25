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

    const expected = [{ name: "Stockport" }, { name: "Liverpool" }];
    expect(bestCruise.ports).toEqual(expected);
  });
});
