/**
 * SnwError
 * Normal Error With Code. >_<
 * @example
 * ```js
 * throw new SnwError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export class SnwError extends Error {
    constructor(message : string, code : string) {
        super(message);
        this.name = `SonicwareError [${code}]`
    }
};
/**
 * SnwTypeError
 * Normal TypeError With Code. >_<
 * @example
 * ```js
 * throw new SnwTypeError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export class SnwTypeError extends TypeError {
    constructor(message : string, code : string) {
        super(message);
        this.name = `SonicwareTypeError [${code}]`
    }
};
/**
 * SnwSyntaxError
 * Normal SyntaxError with code >_<
 * @example
 * ```js
 * throw new SnwSyntaxError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export class SnwSyntaxError extends SyntaxError {
    constructor(message : string, code : string) {
        super(message);
        this.name = `SonicwareSyntaxError [${code}]`
    }
};
/**
 * SnwRangeError
 * Normal RangeError with code >_<
 * @example
 * ```js
 * throw new SnwRangeError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export class SnwRangeError extends RangeError {
    constructor(message : string, code : string) {
        super(message);
        this.name = `SonicwareRangeError [${code}]`
    }
};