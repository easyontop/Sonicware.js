/**
 * ActionRow
 * ActionRowBuilder for much older DiscordJS Versions
 * @example
 * ```js
 * const { ActionRow } = require("sonicware.js");
 * // ...
 * message.channel.send({
 *      components: [new ActionRow().setComponents(/* your components here *\/)],
 *      content: "\u200b"
 * })
 * ```
 * @class
 */

export class ActionRow {
    public type : number;
    public components : object[];
    constructor() {
        this.type = 1;
        this.components = [];
    }
    addComponent(cmp : object) {
        this.components.push(cmp);
        return this;
    }
    setComponents(cmp : object[]) {
        this.components = cmp;
        return this;
    }
    toJSON() {
        return {
            type: 1,
            components: this.components
        }
    }
}