function hexToRgb(hex : string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } as RGB : null;
}

/**
 * @name RGB
 * @description Red Green Blue Interface
 * @interface
 */

export interface RGB {
  r?: number;
  g?: number;
  b?: number;
}

/**
 * HEXtoRGB
 * Hex Color To Red Green Blue!
 * @example
 * ```js
 * const {HEXtoRGB} = require("sonicware.js");
 * //...
 * console.log(HEXtoRGB("#ffffff")); //-> { r: 255, g: 255, b: 255 }
 * ```
 * @function
 */

export const HEXtoRGB = (Hex : string) : object | null => {
    return hexToRgb(Hex);
};