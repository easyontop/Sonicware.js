/**
 * **RobloxVersion** : Display Version
 */
export declare class RobloxVersion1 {
    mobile: string;
    windows: string;
    mac: string;
    constructor(a1: string, a2: string, a3: string);
}
export declare function RobloxVersion(): Promise<RobloxVersion1>;
