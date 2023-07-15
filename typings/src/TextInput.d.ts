export declare class TextInput {
    constructor();
    setCustomId(e: string): this;
    setLabel(e: string): this;
    setMaxLength(w: number): this;
    setMinLength(w: number): this;
    setPlaceholder(w: string): this;
    setRequired(w?: boolean): this;
    setStyle(e: string | number): this;
    setValue(e: string): this;
    toJSON(): {
        type: number;
        custom_id: string;
        label: string;
        max_length: number;
        min_length: number;
        placeholder: string;
        required: boolean;
        style: string | number;
        value: string;
    };
    type: number;
    custom_id: string;
    label: string;
    max_length: number | null;
    min_length: number | null;
    placeholder: string;
    required: boolean;
    style: string | number;
    value: string;
}
