const { hexToRGB, formatRGB, formatRGBA } = require("./utils");

const hexAlpha = (input, alpha) => {
  const newColor = hexToRGB(input);

  if (alpha !== undefined) {
    return formatRGBA(newColor, alpha);
  } else {
    return formatRGB(newColor);
  }
};

module.exports = hexAlpha;
