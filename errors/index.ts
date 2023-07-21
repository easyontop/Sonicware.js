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
 * @name SnwError
 * @extends Error
 * @param message Message of the error
 * @param code Code of the error
 * @example
 * ```js
 * throw new SnwError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export const SnwError = MakeError(Error);
/**
 * @name SnwTypeError
 * @extends TypeError
 * @param message Message of the error
 * @param code Code of the error
 * @example
 * ```js
 * throw new SnwTypeError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export const SnwTypeError = MakeError(TypeError);
/**
 * @name SnwSyntaxError
 * @extends SyntaxError
 * @param message Message of the error
 * @param code Code of the error
 * @example
 * ```js
 * throw new SnwSyntaxError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export const SnwSyntaxError = MakeError(SyntaxError);
/**
 * @name SnwRangeError
 * @extends SyntaxError
 * @param message Message of the error
 * @param code Code of the error
 * @example
 * ```js
 * throw new SnwRangeError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export const SnwRangeError = MakeError(RangeError);