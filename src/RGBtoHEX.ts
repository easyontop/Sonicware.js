function componentToHex(c : number | string) : any {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r : number, g : number, b : number) : string {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
module.exports = (Red: number, Green: number, Blue: number) : string | null => {
    if(Red > 255 
        || Blue > 255 
        || Green > 255 
        || Red < 0 
        || Green < 0 
        || Blue < 0
    ) throw new RangeError("Invalid RGB Format: R/G/B must be 0 ~ 255")
    return rgbToHex(Red, Green, Blue);
}