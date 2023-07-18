/**
 * @name StringSelect
 * @description A StringSelectMenu Component for older DiscordJS Versions
 * @class
 */
export class StringSelect {
    constructor() {
        this.type = 3;
        this.options = [];
    }
    setCustomId(id : string) {
        this.custom_id = id;
        return this;
    }
    setDisabled(b : boolean | null) {
        this.disabled = b || true;
        return this;
    }
    setPlaceholder(e : string) {
        this.placeholder = e;
        return this;
    }
    setMaxValue(e : number) {
        this.max_values = e;
        return this;
    }
    setMinValue(w : number) {
        this.min_values = w;
        return this;
    }
    addOption(w : StringSelectOptions) {
        this.options.push(w);
        return this;
    }
    setOptions(w : StringSelectOptions[]) {
        this.options = w;
        return this;
    }
    toJSON() {
        return {
            type: 3,
            options: this.options,
            custom_id: this.custom_id,
            disabled: this.disabled || false,
            placeholder: this.placeholder,
            max_values: this.max_values || 1,
            min_values: this.min_values || 1
        };
    }
    public type : number;
    public options : StringSelectOptions[] = [];
    public custom_id: string;
    public disabled : boolean | null;
    public placeholder : string;
    public max_values : number | null;
    public min_values : number | null;
}

/**
 * @name StringSelectOptions
 * @prop label Label For The String Select Item
 * @prop value Value For The String Select Item
 * @interface
 */

export interface StringSelectOptions {
    label: string;
    value: string;
};