const Port = require("./port");

describe("Port", () => {
  const stockport = new Port("Stockport");

  it("returns an object", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("has a name.", () => {
    expect(stockport.name).toEqual("Stockport");
  });
});
