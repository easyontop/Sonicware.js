/// <reference types="node" />
/**
 * @name ButtonStyles
 * @description **Style For DiscordJS Number**
 */
export declare const ButtonStyles: any;
/**
 * @name Button
 * @description ButtonBuilder for **older versions DiscordJS**
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
