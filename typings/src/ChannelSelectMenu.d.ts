/**
 * @name ChannelTypes
 * @description **Channel Type to Number**
 */
export declare const ChannelTypes: any;
/**
 * @name ChannelSelect
 * @description ChannelSelectBuilder for older Discordjs versions
 * @class
 */
export declare class ChannelSelect {
    constructor();
    setChannelType(ct: number[]): this;
    addChannelType(ct: number | string): this;
    setCustomId(id: string): this;
    setDisabled(id?: boolean): this;
    setPlaceholder(d: string): this;
    setMinValues(d: number): this;
    setMaxValues(d: number): this;
    toJSON(): {
        type: number;
        channel_types: number[];
        custom_id: string;
        disabled: boolean;
        placeholder: string;
        min_values: number;
        max_values: number;
    };
    type: number;
    channel_types: number[];
    custom_id: string;
    disabled: boolean | null;
    placeholder?: string;
    min_values: number;
    max_values: number;
}
