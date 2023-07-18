/// <reference types="node" />
/**
 * ButtonBuilder for older versions DiscordJS
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
    setStyle(st: string): this;
    setEmoji(em: string, et: string): this;
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
