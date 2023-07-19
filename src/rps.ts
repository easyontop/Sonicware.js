import { ActionRow, Button } from "../sonicware";

/**
 * Options for RPS Function
 */
export interface RPSOptions {
    opponent: any;
}

/**
 * Win Combinations for RPS
 */

export const RPSCombinations : any = {
	"rock": 'scissors',
	"scissors": 'paper',
	"paper": 'rock'
};

/**
 * Rock Paper Scissors Game For DiscordJS
 * @param message Message sent by user
 * @param options RPS Options
 */

export async function rps(message : any, options : RPSOptions) {
    const accept = new Button().setLabel("Accept").setCustomId("rps_accept").setStyle("SUCCESS");
    const deny = new Button().setLabel("Deny").setCustomId("rps_deny").setStyle("DANGER");
    const requestRow = new ActionRow().setComponents([accept, deny]);
    const rpsTable = new ActionRow().setComponents([
        new Button().setEmoji("🪨").setCustomId("rps_rock").setStyle("PRIMARY"),
        new Button().setEmoji("📄").setCustomId("rps_paper").setStyle("PRIMARY"),
        new Button().setEmoji("✂️").setCustomId("rps_scissors").setStyle("PRIMARY")
    ]);
    let m = await message.reply({
        content: `<@${options.opponent.id}>. You got a Rock Paper Scissor invitation !`,
        embeds: [{
            title: "RPS Game",
            description: "Do you wanna play rps game with <@"+message.author.id+">?",
            color: 0x00dd00
        }],
        components: [requestRow]
    });
    const collector = await m.createMessageComponentCollector({
        time: 30000
    });
    let opponent = options.opponent;
    collector.on("collect", async(button: any) => {
        if (button.user.id !== opponent.id) {
            await button.reply({
                content: `Only <@!${opponent.id}> can use these buttons!`,
                ephemeral: true
            });
            return;
        };
        await button.deferUpdate();
        if(!button.isButton()) return;
        await button.deferUpdate();
        if(button.customId == "rps_deny") {
            return collector.stop("cancel");
        } else if (button.customId == "rps_accept") {
            await m.edit({
                content: "You got 30s to play.",
                embeds: [],
                components: [rpsTable]
            });
            collector.stop("accept");
            const rpsGame = await m.createMessageComponentCollector({
                time: 30000
            });
            let p1: string, p2: string;
            rpsGame.on("collect", async(b: any) => {
                await b.deferUpdate();
                if(b.user.id !== message.author.id && b.user.id !== opponent.id) return b.reply({
                    content: "This game isn't for you!",
                    ephemeral: true
                });
                if(b.user.id == opponent.id) p1 = b.customId.replace("rps_", "");
                if(b.user.id == message.author.id) p2 = b.customId.replace("rps_", "");
                if(p1 && p2) return rpsGame.stop("gameEnd");
            });
            rpsGame.on("end", async(_c: any, reason: any) => {
                if(reason == "time") {
                    await m.edit({
                        embeds: [],
                        components: [],
                        content: "Timed out."
                    });
                } else {
                    if(p1 == p2) {
                        await m.edit({
                            content: `Draw Game!~\n${message.author.username} & ${opponent.username} - ${p1}`,
                            embeds: [],
                            componenets: []
                        })
                    } else if(RPSCombinations[p1] == p2) {
                        await m.edit({
                            content: `${opponent.username} Won!\n${opponent.username} - ${p1}\n${message.author.username} - ${p2}`,
                            embeds: [],
                            components: []
                        })
                    } else if(RPSCombinations[p2] == p1) {
                        await m.edit({
                            content: `${message.author.username} Won!\n${opponent.username} - ${p1}\n${message.author.username} - ${p2}`,
                            embeds: [],
                            components: []
                        })
                    } 
                }
            });
        };
    });
    collector.on("end", async(_c: any, reason: any) => {
        if(reason == "time") {
            await m.edit({
                content: "Timed Out.",
                embeds: [],
                components: []
            });
            return;
        } else if(reason == "cancel") {
            await m.edit({
                content: "User Denied.",
                embeds: [],
                components: []
            })
        }
    })
};