const { hexToRGB, formatRGB, formatRGBA } = require("./utils");

const hexAlpha = (input, alpha) => {
  const newColor = hexToRGB(input);

  return alpha && typeof alpha === "number"
    ? formatRGBA(newColor, alpha)
    : formatRGB(newColor);
};

module.exports = hexAlpha;
