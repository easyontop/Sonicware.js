import { APIEmbed, EmbedBuilder, Message } from "discord.js";

/**
 * The options for ghost ping constructor.
 * @deprecated embed ~~Customize Embed to warn people if they ghost ping.~~ This can NOT customize items inside.
*/
export interface GhostPingOptions {
    embed?: APIEmbed;
};

/**
 * Ghost ping handler
 * Returns true if success, false if failed / not ghostPing.
 */
export class GhostPingHandler {
    public embed: APIEmbed;
    constructor(options: GhostPingOptions) {
        this.embed = options.embed;
    }
    messageDelete(message: Message): Promise<boolean> {
        return new Promise((resolve, reject) => {
            message.fetch()
                .then((m: any) => {
                    if(m) {
                        reject("Fetch() : nothing should be returned if the message is deleted. Use it only for messageDelete event.");
                    }
                })
                .catch(() => {return resolve(false)});
            if(message.mentions.users.first()) {
                if(message.author.bot || message.mentions.users.first().bot) return resolve(false);
                if(!message.guild.members.cache.get(message.mentions.users.first()?.id)) return resolve(false);
                message.channel.send({
                    embeds: [
                        this.embed || new EmbedBuilder()
                        .setTitle("Ghost Ping Detected")
                        .setDescription(`<@${message.author.id}> has pinged ${message.mentions.users.first().globalName}`)
                        .setColor("DarkRed")
                    ]
                }).then(() => {resolve(true)}).catch(() => {reject(false)})
            };
        });
    }
};