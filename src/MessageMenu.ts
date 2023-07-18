/**
 * @name MessageMenu
 * @description **Page Embed with Buttons**
 * @function
 */

module.exports = async function(message:any,options:any) {
    let embeds = options.embeds || options.pages || options;
    if(!embeds || !message) throw new Error("func(message, options {embeds[] | MessageEmbed[]})");
    const first = {
        custom_id: "first",
        type: 2,
        emoji: { name: "⏪" },
        style: 1,
        disabled: false
    };
    const last = {
        custom_id: "last",
        type: 2,
        emoji: { name: "⏩" },
        style: 1,
        disabled: false
    };
    const back = {
        custom_id: "back",
        type: 2,
        emoji: { name: "◀" },
        style: 1,
        disabled: false
    };
    const next = {
        custom_id: "next",
        type: 2,
        emoji: { name: "▶" },
        style: 1,
        disabled: false
    };
    const trash = {
        custom_id: "delete_trash",
        type: 2,
        emoji: { name: "🗑" },
        style: 4,
        disabled: false
    };
    const row = {
        type: 1,
        components: [first, back, trash, next, last]
    };
    const row2 = {
        type: 1,
        components: [
            {
                type: 2,
                style: 1,
                label: "Requested by "+message.author.username,
                disabled: true,
                custom_id: "useless_trash"
            }
        ]
    };
    let page = 0;
    let pages = options.embeds || options.pages || options;
    row.components[0].disabled = true;
    row.components[1].disabled = true;
    let m = await message.reply({
        embeds: [pages[page]],
        components: [row, row2],
        allowedMentions: { repliedUser: false }
    });
    const filter = (button : any) => button.message.id === m.id && button.isButton();
    let collector = m.createMessageComponentCollector({
        idle: 120000,
        filter: filter
    });
    collector.on("collect", async(b : any) => {
        if(b.user.id !== message.author.id) {
            return b.reply({
              ephemeral: true,
              content: "This menu isn't for you!"
            })
        };
        await b.deferUpdate();
        if(b.customId == "first") {
            page = 0;
        } else if(b.customId == "last") {
            page = pages.length - 1;
        } else if(b.customId == "next") {
            if(page + 1 == pages.length) {
                page = 0;
            } else {
            page += 1;
            }
        } else if(b.customId == "back") {
            if(page - 1 < 0) {
                page = pages.length - 1;
            } else {
                page -= 1;
            };
        };
        if(page == 0) {
            row.components[0].disabled = true;
            row.components[1].disabled = true;
            row.components[3].disabled = false;
            row.components[4].disabled = false;
        } else if(page == pages.length - 1) {
            row.components[0].disabled = false;
            row.components[1].disabled = false;
            row.components[3].disabled = true;
            row.components[4].disabled = true;
        } else {
            row.components[0].disabled = false;
            row.components[1].disabled = false;
            row.components[3].disabled = false;
            row.components[4].disabled = false;
        };
        if(b.customId == "delete_trash") return collector.stop();
        m.edit({
            embeds: [pages[page]],
            components: [row, row2],
            allowedMentions: { repliedUser: false }
        });
    });
    collector.on("end", (_reason : any) => {
        row.components.forEach(x => x.disabled = true);
        m.edit({
            embeds: [pages[page]],
            components: [row, row2],
            allowedMentions: { repliedUser: false }
        });
    });
}