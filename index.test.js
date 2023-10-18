const hexAlpha = require("./index");

test("hexAlpha returns an RGBA value for a colour with an opacity", () => {
  expect(hexAlpha("#000000", 1)).toBe("rgba(0,0,0,1)");
  expect(hexAlpha("#f00", 0.1)).toBe("rgba(255,0,0,0.1)");
  expect(hexAlpha("#fa6d01", 0)).toBe("rgba(250,109,1,0)");
  expect(hexAlpha("#fa6d01", 0.5)).toBe("rgba(250,109,1,0.5)");
});

test("hexAlpha returns an RGB value for a colour without an opacity", () => {
  expect(hexAlpha("#ffffff")).toBe("rgb(255,255,255)");
  expect(hexAlpha("#fa6d01")).toBe("rgb(250,109,1)");
});

test("hexAlpha throws an error for a colour with an invalid opacity", () => {
  expect(hexAlpha("#fa6d01", "")).toThrowError();
  expect(hexAlpha("#fa6d01", false)).toThrowError();
  expect(hexAlpha("#fa6d01", -1)).toThrowError();
  expect(hexAlpha("#fa6d01", 2.4)).toThrowError();
});

test("hexAlpha throws an error for an invalid colour", () => {
  expect(hexAlpha("invalid")).toThrowError();
  expect(hexAlpha("#ffgg00")).toThrowError();
  expect(hexAlpha("#ff000")).toThrowError();
  expect(hexAlpha("#ff00000")).toThrowError();
});
