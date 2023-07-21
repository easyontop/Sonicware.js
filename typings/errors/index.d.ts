/**
 * @name SnwError
 * @extends Error
 * @param message Message of the error
 * @param code Code of the error
 * @example
 * ```js
 * throw new SnwError("This is an Error", "ERROR01")
 * ```
 */
export declare const SnwError: {
    new (message: string, code: string): {
        [x: string]: any;
    };
    [x: string]: any;
};
/**
 * @name SnwTypeError
 * @extends TypeError
 * @param message Message of the error
 * @param code Code of the error
 * @example
 * ```js
 * throw new SnwTypeError("This is an Error", "ERROR01")
 * ```
 */
export declare const SnwTypeError: {
    new (message: string, code: string): {
        [x: string]: any;
    };
    [x: string]: any;
};
/**
 * @name SnwSyntaxError
 * @extends SyntaxError
 * @param message Message of the error
 * @param code Code of the error
 * @example
 * ```js
 * throw new SnwSyntaxError("This is an Error", "ERROR01")
 * ```
 */
export declare const SnwSyntaxError: {
    new (message: string, code: string): {
        [x: string]: any;
    };
    [x: string]: any;
};
/**
 * @name SnwRangeError
 * @extends SyntaxError
 * @param message Message of the error
 * @param code Code of the error
 * @example
 * ```js
 * throw new SnwRangeError("This is an Error", "ERROR01")
 * ```
 */
export declare const SnwRangeError: {
    new (message: string, code: string): {
        [x: string]: any;
    };
    [x: string]: any;
};
