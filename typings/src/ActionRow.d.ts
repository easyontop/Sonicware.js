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
export declare class ActionRow {
    type: number;
    components: object[];
    constructor();
    addComponent(cmp: object): this;
    setComponents(cmp: object[]): this;
    toJSON(): {
        type: number;
        components: object[];
    };
}
