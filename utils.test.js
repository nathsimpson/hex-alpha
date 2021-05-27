const utils = require("./utils");

test("#ffffff converts to rgb object", () => {
  expect(utils.hexToRGB("#ffffff")).toStrictEqual({ r: 255, g: 255, b: 255 });
});
