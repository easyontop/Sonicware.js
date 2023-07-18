/// <reference types="node" />
import { EventEmitter } from "node:events";
/**
 * @name BoostEventOptions
 * @description Set the limit guilds for BoostEvent
 * @prop guilds Only emit events if guildId is in guilds list.
 * @interface
 */
export interface BoostEventOptions {
    guilds?: string[];
}
/**
 * @name BoostEvent
 * @description Emits `boostCreate` when member **boosted** and `boostDelete` when boost **ends**
 * @class
 */
export declare class BoostEvent extends EventEmitter {
    options: BoostEventOptions;
    enabled: boolean;
    constructor(client: any, options?: BoostEventOptions);
    toggle(a1: boolean | null): this;
}
