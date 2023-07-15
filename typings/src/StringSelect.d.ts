export declare class StringSelect {
    constructor();
    setCustomId(id: string): this;
    setDisabled(b: boolean | null): this;
    setPlaceholder(e: string): this;
    setMaxValue(e: number): this;
    setMinValue(w: number): this;
    addOption(w: Options): this;
    setOptions(w: Options[]): this;
    toJSON(): {
        type: number;
        options: Options[];
        custom_id: string;
        disabled: boolean;
        placeholder: string;
        max_values: number;
        min_values: number;
    };
    type: number;
    options: Options[];
    custom_id: string;
    disabled: boolean | null;
    placeholder: string;
    max_values: number | null;
    min_values: number | null;
}
interface Options {
    label: string;
    value: string;
}
export {};
