import { EventEmitter } from "node:events";
/**
 * BoostEventOptions
 * @prop guilds Only emit events if guildId is in guilds list.
 */
interface BoostEventOptions {
    guilds?: string[];
}

export class BoostEvent extends EventEmitter {
    public options: BoostEventOptions;
    public enabled: boolean;
    constructor(client: any, options: BoostEventOptions = {}) {
        super({ captureRejections: true });
        if(!client) throw new SyntaxError("Expected DiscordJs Client.");
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