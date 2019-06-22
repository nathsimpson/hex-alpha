const hexToRGB = input => {
  // normalising string
  let inputColor = input.replace("#", "").toLowerCase();

  // creating the RGB object
  let rgb = {
    R: inputColor.slice(0, 2),
    G: inputColor.slice(2, 4),
    B: inputColor.slice(4, 6)
  };

  // applying the algorithm
  // FF = (15 × 16¹) + (15 × 16⁰) = 255
  // input = (x × 16¹) + (y × 16⁰) = 255
  // input = (a) + (b) = 255
  Object.keys(rgb).forEach(e => {
    const x = rgb[e].charAt(0); // first character of the color channel string
    const y = rgb[e].charAt(1); // second character of the color channel string

    const a = keys[x] * Math.pow(16, 1); // x * 16¹
    const b = keys[y] * Math.pow(16, 0); // y * 16⁰
    rgb[e] = a + b;
  });

  return rgb;
};

formatRGB = ({ R, G, B }) => `rgb(${R},${G},${B})`;
formatRGBA = (color, a) =>
  `rgba(${color.R},${color.G},${color.B},${color.A || a})`;

const keys = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};

module.exports = { hexToRGB, formatRGB, formatRGBA };
