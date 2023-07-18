/**
 * **RobloxVersion** : Display Version
 */
declare class RobloxVersion {
    mobile: string;
    windows: string;
    mac: string;
    constructor(a1: string, a2: string, a3: string);
}
export default function (): Promise<RobloxVersion>;
export {};
