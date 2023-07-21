import { SnwRangeError } from "../errors";

function componentToHex(c : number | string) : any {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r : number, g : number, b : number) : string {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/**
 * RGBtoHEX
 * Red Green Blue Color to Hex!
 * @example
 * ```js
 * const {RGBtoHEX} = require("sonicware.js");
 * console.log(RGBtoHEX(255, 255, 255)) //-> #ffffff
 * ```
 * @function
 */

export function RGBtoHEX (Red: number, Green: number, Blue: number) : string | null {
    if(Red > 255 
        || Blue > 255 
        || Green > 255 
        || Red < 0 
        || Green < 0 
        || Blue < 0
    ) throw new SnwRangeError("Invalid RGB Format: R/G/B must be 0 ~ 255", "COLOR_RANGE")
    return rgbToHex(Red, Green, Blue);
}