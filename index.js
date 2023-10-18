const { hexToRGB, formatRGB, formatRGBA } = require("./utils");

/**
 * hexAlpha allows you to set an opacity value to a HEX color. It returns a string in the format of RGBA.
 * @param {string} input - A color in hexadecimal syntax. e.g. #fa6d01
 * @param {number} alpha - The desired opacity, from 0 to 1.
 * @returns {string} - The new color in rgba() or rgb() syntax.
 */
const hexAlpha = (input, alpha) => {
  // ensure input is a valid hex color
  if (typeof input !== "string" || !/^#([0-9A-Fa-f]{3}){1,2}$/.test(input)) {
    throw new Error(
      "Invalid input: input must be a valid hexadecimal color code. e.g. #fa6d01."
    );
  }

  // convert hex string to rgb map
  const rgb = hexToRGB(input);

  // if alpha is not provided, return rgb string
  if (alpha === undefined) return formatRGB(rgb);

  // ensure alpha is a valid number between 0 and 1
  if (typeof alpha !== "number" || alpha < 0 || alpha > 1) {
    throw new Error(
      "Invalid alpha value: alpha must be a number between 0 and 1."
    );
  }

  // return rgba string
  return formatRGBA(rgb, alpha);
};

module.exports = hexAlpha;
