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
 * @name HEXtoRGB
 * @description Hex Color To Red Green Blue!
 * @function
 */
export declare const HEXtoRGB: (Hex: string) => object | null;
