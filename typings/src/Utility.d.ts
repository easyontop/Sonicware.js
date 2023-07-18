export declare const userAgents: string[];
export declare function checkProfanity(text: string): Promise<boolean>;
/**
 * @name isHoisted
 * @description Checks if the given name is hoisted or not
 * @author CTK-WARRIOR/something-random-on-discord
 * @param name String for it to check
 * @returns boolean
 * @see https://github.com/CTK-WARRIOR/something-random-on-discord
 * @function
 */
export declare function isHoisted(name: string): boolean;
/**
 * @name isURL
 * @description Check if the string is URL or not
 * @author CTK-WARRIOR/something-random-on-discord
 * @param link String for it to check
 * @returns boolean
 * @see https://github.com/CTK-WARRIOR/something-random-on-discord
 * @function
 */
export declare function isURL(link: string): boolean;
/**
 * @name getAdvice
 * @description Gets an advice!
 * @author CTK-WARRIOR/something-random-on-discord
 * @returns Promise<string>
 * @see https://github.com/CTK-WARRIOR/something-random-on-discord
 * @function
 */
export declare function getAdvice(): Promise<string>;
/**
 * @name getFact
 * @description Gets a fact!
 * @author CTK-WARRIOR/something-random-on-discord
 * @returns Promise<string>
 * @see https://github.com/CTK-WARRIOR/something-random-on-discord
 * @function
 */
export declare function getFact(): Promise<string>;
/**
 * @name getNPM
 * @description Gets NPM Package Details
 * @author CTK-WARRIOR/something-random-on-discord
 * @returns Promise<any>
 * @see https://github.com/CTK-WARRIOR/something-random-on-discord
 * @param [pkg="npm"] Package Name
 * @function
 */
export declare function getNPM(pkg?: string): Promise<any>;
