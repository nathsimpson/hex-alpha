const { hexToRGB, formatRGB, formatRGBA } = require("./utils");

const color = (input, alpha) => {
  const newColor = hexToRGB(input);

  if (alpha) {
    return formatRGBA(newColor, alpha);
  } else {
    return formatRGB(newColor);
  }
};

module.exports = color;
