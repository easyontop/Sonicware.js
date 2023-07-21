import { EventEmitter } from "node:events";
import { SnwSyntaxError } from "../errors";
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
 * BoostEvent
 * Emits `boostCreate` when member **boosted** and `boostDelete` when boost **ends**
 * @example
 * ```js
 * const { BoostEvent } = require("sonicware.js");
 * client.BoostEvent = new BoostEvent()
 * client.BoostEvent.on("boostCreate", (member) => {/* ... *\/})
 * client.BoostEvent.on("boostDelete", (member) => {/* ... *\/})
 * ```
 * @class
 */

export class BoostEvent extends EventEmitter {
    public options: BoostEventOptions;
    public enabled: boolean;
    constructor(client: any, options: BoostEventOptions = {}) {
        super({ captureRejections: true });
        if(!client) throw new SnwSyntaxError("Expected DiscordJs Client.", "MISSING_ARGUMENTS");
        this.enabled = true;
        this.options = options;
        client.on("guildMemberUpdate", (oldMember : any, newMember : any) => {
            if(!this.enabled) return;
            if(this.options.guilds && !this.options.guilds.some(h => h === newMember.guild.id)) return;
            if(!oldMember.premiumSince && newMember.premiumSince) {
                this.emit("boostCreate", newMember);
            };
            if(oldMember.premiumSince && !newMember.premiumSince) {
                this.emit("boostDelete", newMember);
            };
        });
    }
    toggle(a1: boolean | null) {
        this.enabled = a1 || !this.enabled;
        return this;
    }
};