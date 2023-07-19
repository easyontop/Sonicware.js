function MakeError(Base : any) {
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
 */
export const SnwError = MakeError(Error);
/**
 * @name SnwTypeError
 * @extends TypeError
 * @param message Message of the error
 * @param code Code of the error
 */
export const SnwTypeError = MakeError(TypeError);
/**
 * @name SnwSyntaxError
 * @extends SyntaxError
 * @param message Message of the error
 * @param code Code of the error
 */
export const SnwSyntaxError = MakeError(SyntaxError);
/**
 * @name SnwRangeError
 * @extends SyntaxError
 * @param message Message of the error
 * @param code Code of the error
 */
export const SnwRangeError = MakeError(RangeError);