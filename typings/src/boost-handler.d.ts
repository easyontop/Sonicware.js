import { Client } from "discord.js";
import EventEmitter from "node:events";
/**
 * BoostNotifier Options
 */
export interface BoostNotifierOptions {
    client: Client;
}
/**
 * # Event Notifier for Boostings
 * ## Events
 * * `boostRemove` - When Boost Removes
 * * `boostCreate` - When Boost Creates
 * > EmitArguments: Guild, PartialGuildMember | GuildMember, GuildMember
 */
export declare class BoostNotifier extends EventEmitter {
    client: Client;
    constructor(options: BoostNotifierOptions);
    zz(): void;
}
