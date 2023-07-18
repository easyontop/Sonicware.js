/**
 * @name ActionRow
 * @description ActionRowBuilder for much older DiscordJS Versions
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
