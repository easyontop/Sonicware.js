import { APIEmbed, Message } from "discord.js";
/**
 * The options for ghost ping constructor.
 * @deprecated embed ~~Customize Embed to warn people if they ghost ping.~~ This can NOT customize items inside.
*/
export interface GhostPingOptions {
    embed?: APIEmbed;
}
/**
 * Ghost ping handler
 * Returns true if success, false if failed / not ghostPing.
 */
export declare class GhostPingHandler {
    embed: APIEmbed;
    constructor(options: GhostPingOptions);
    messageDelete(message: Message): Promise<boolean>;
}
