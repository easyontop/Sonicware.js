/// <reference types="node" />
/**
 * @name ButtonStyles
 * @description **Style For DiscordJS Number**
 */
export declare const ButtonStyles: any;
/**
 * Button
 * ButtonBuilder for **older versions DiscordJS**
 * @example
 * ```js
 * const { Button } = require("sonicware.js");
 * // ...
 * message.channel.sened({
 *      content: "\u200b",
 *      components: [{
 *          type: 1,
 *          components: [new Button().setStyle("PRIMARY").setCustomId("hey_id").setLabel("Hey Bro!")]
 *      }]
 * })
 * ```
 * @class
 */
export declare class Button {
    type: number;
    style: number | string;
    url: any;
    custom_id: string;
    emoji: object;
    label: string;
    disabled: boolean | false;
    constructor();
    setURL(a1: URL): this;
    setCustomId(id: string): this;
    setStyle(st: "PRIMARY" | "SECONDARY" | "LINK" | "SUCCESS" | "DANGER" | number): this;
    setEmoji(em: string, et?: string): this;
    setLabel(lab: string): this;
    setDisabled(b: boolean | null): this;
    toJSON(): {
        type: number;
        label: string;
        custom_id: string;
        style: string | number;
        url: any;
        emoji: object;
        disabled: boolean;
    };
}
