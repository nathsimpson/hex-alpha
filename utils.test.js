const utils = require("./utils");

test("#ffffff converts to rgb object", () => {
  expect(utils.hexToRGB("#ffffff")).toStrictEqual({ R: 255, G: 255, B: 255 });
});
