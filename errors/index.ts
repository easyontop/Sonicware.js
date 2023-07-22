function MakeError(Base : any) {
    /**
     * SonicwareError
     * 
     * A error that extends the original base and with code.
     * @ignore
     */
    return class SonicwareError extends Base {
        constructor(message : string, code : string) {
            super(message);
            this.name = `Sonicware${super.name} [${code}]`
        }
    }
}
/**
 * SnwError
 * 
 * SnwError **Extends** Error
 * @example
 * ```js
 * throw new SnwError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export const SnwError = MakeError(Error);
/**
 * SnwTypeError
 * 
 * SnwTypeError **Extends** TypeError
 * @example
 * ```js
 * throw new SnwTypeError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export const SnwTypeError = MakeError(TypeError);
/**
 * SnwSyntaxError
 * 
 * SnwSyntaxError **Extends** SyntaxError
 * @example
 * ```js
 * throw new SnwSyntaxError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export const SnwSyntaxError = MakeError(SyntaxError);
/**
 * SnwRangeError
 * 
 * SnwRangeError **Extends** RangeError
 * @example
 * ```js
 * throw new SnwRangeError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export const SnwRangeError = MakeError(RangeError);