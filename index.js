const { hexToRGB, formatRGB, formatRGBA } = require("./utils");

/**
 * @param {string} input - A color in hexadecimal syntax. e.g. #fa6d01
 * @param {number} alpha - The desired opacity, from 0 to 1.
 * @returns {string} - The new color in rgba() or rgb() syntax.
 */
const hexAlpha = (input, alpha) => {
  const newColor = hexToRGB(input);

  return typeof alpha === "number" && alpha >= 0 && alpha <= 1
    ? formatRGBA(newColor, alpha)
    : formatRGB(newColor);
};

module.exports = hexAlpha;
