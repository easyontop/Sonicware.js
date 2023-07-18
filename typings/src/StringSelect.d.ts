/**
 * A StringSelectMenu Component for older DiscordJS Versions
 */
export declare class StringSelect {
    constructor();
    setCustomId(id: string): this;
    setDisabled(b: boolean | null): this;
    setPlaceholder(e: string): this;
    setMaxValue(e: number): this;
    setMinValue(w: number): this;
    addOption(w: StringSelectOptions): this;
    setOptions(w: StringSelectOptions[]): this;
    toJSON(): {
        type: number;
        options: StringSelectOptions[];
        custom_id: string;
        disabled: boolean;
        placeholder: string;
        max_values: number;
        min_values: number;
    };
    type: number;
    options: StringSelectOptions[];
    custom_id: string;
    disabled: boolean | null;
    placeholder: string;
    max_values: number | null;
    min_values: number | null;
}
/**
 * StringSelectOptions
 * @prop label Label For The String Select Item
 * @prop value Value For The String Select Item
 * @interface
 */
interface StringSelectOptions {
    label: string;
    value: string;
}
export {};
