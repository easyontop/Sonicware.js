/// <reference types="node" />
import { EventEmitter } from "node:events";
/**
 * BoostEventOptions
 * @prop guilds Only emit events if guildId is in guilds list.
 */
interface BoostEventOptions {
    guilds?: string[];
}
export declare class BoostEvent extends EventEmitter {
    options: BoostEventOptions;
    enabled: boolean;
    constructor(client: any, options?: BoostEventOptions);
    toggle(a1: boolean | null): this;
}
export {};
