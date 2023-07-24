/**
 * SnwError
 * Normal Error With Code. >_<
 * @example
 * ```js
 * throw new SnwError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export declare class SnwError extends Error {
    constructor(message: string, code: string);
}
/**
 * SnwTypeError
 * Normal TypeError With Code. >_<
 * @example
 * ```js
 * throw new SnwTypeError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export declare class SnwTypeError extends TypeError {
    constructor(message: string, code: string);
}
/**
 * SnwSyntaxError
 * Normal SyntaxError with code >_<
 * @example
 * ```js
 * throw new SnwSyntaxError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export declare class SnwSyntaxError extends SyntaxError {
    constructor(message: string, code: string);
}
/**
 * SnwRangeError
 * Normal RangeError with code >_<
 * @example
 * ```js
 * throw new SnwRangeError("This is an Error", "ERROR01")
 * ```
 * @class
 */
export declare class SnwRangeError extends RangeError {
    constructor(message: string, code: string);
}
