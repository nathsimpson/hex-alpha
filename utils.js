/**
 * @param {string} input - A color in hexadecimal syntax. e.g. #fa6d01
 * @returns { R: string, G: string, B: string}
 */
const hexToRGB = (input) => {
  // normalising string
  const inputColor = input.replace("#", "").toLowerCase();

  // Check if color channels are 1 or 2 characters long to
  // support shorthand hex notation. e.g. #fff or #ffffff.
  const isShorthand = inputColor.length === 3;
  const slotWidth = isShorthand ? 1 : 2;

  // creating the RGB object
  let rgb = {
    R: inputColor.slice(0, slotWidth),
    G: inputColor.slice(slotWidth, 2 * slotWidth),
    B: inputColor.slice(2 * slotWidth, 3 * slotWidth),
  };

  // applying the algorithm
  // FF = (15 × 16¹) + (15 × 16⁰) = 255
  // input = (x × 16¹) + (y × 16⁰) = 255
  // input = (a) + (b) = 255
  Object.keys(rgb).forEach((e) => {
    const channelValue = rgb[e];
    const x = isShorthand ? channelValue : channelValue.charAt(0); // first character of the color channel string
    const y = isShorthand ? channelValue : channelValue.charAt(1); // second character of the color channel string

    const a = parseInt(x, 16) * Math.pow(16, 1); // x * 16¹
    const b = parseInt(y, 16) * Math.pow(16, 0); // y * 16⁰

    rgb[e] = a + b;
  });

  return rgb;
};

const formatRGB = ({ R, G, B }) => `rgb(${R},${G},${B})`;
const formatRGBA = (color, a) =>
  `rgba(${color.R},${color.G},${color.B},${color.A || a})`;

module.exports = { hexToRGB, formatRGB, formatRGBA };
