import { Client, GuildMember, PartialGuildMember } from "discord.js";
import EventEmitter from "node:events";
/**
 * BoostNotifier Options
 */

export interface BoostNotifierOptions {
    client: Client;
};

/**
 * # Event Notifier for Boostings
 * ## Events
 * * `boostRemove` - When Boost Removes
 * * `boostCreate` - When Boost Creates
 * > EmitArguments: Guild, PartialGuildMember | GuildMember, GuildMember
 */
export class BoostNotifier extends EventEmitter {
    public client: Client;
    constructor(options: BoostNotifierOptions) {
        super({ captureRejections: true });
        this.client = options.client;
        this.zz()
    }
    zz() {
        this.client.on("guildMemberUpdate", (old: PartialGuildMember | GuildMember, nex: GuildMember) => {
            if(old.premiumSince && !nex.premiumSince) {
                this.emit("boostRemove", nex.guild, old, nex);
            };
            if(!old.premiumSince && nex.premiumSince) {
                this.emit("boostCreate", nex.guild, old, nex);
            };
        });
    }
};