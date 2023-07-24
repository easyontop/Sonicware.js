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
export declare const HEXtoRGB: (Hex: string) => object | null;
