const hexAlpha = require("./index");

test("#FFFFFF converts to rgb(255,255,255)", () => {
  expect(hexAlpha("#ffffff")).toBe("rgb(255,255,255)");
});

test("#000000 converts to rgba(0,0,0,1)", () => {
  expect(hexAlpha("#000000", 1)).toBe("rgba(0,0,0,1)");
});

test("#fa6d01 converts to rgb(250,109,1)", () => {
  expect(hexAlpha("#fa6d01")).toBe("rgb(250,109,1)");
});

test("HEX color and alpha converts to RGBA", () => {
  expect(hexAlpha("#fa6d01", 0.1)).toBe("rgba(250,109,1,0.1)");
});

test("HEX color with zero alpha converts to RGBA", () => {
  expect(hexAlpha("#fa6d01", 0)).toBe("rgba(250,109,1,0)");
});

test("#f00 converts to rgba(0,0,0,1)", () => {
  expect(hexAlpha("#f00", 0.1)).toBe("rgba(255,0,0,0.1)");
});
