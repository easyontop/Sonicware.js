const sty : any = {
    paragraph: 2,
    short: 1
}

/**
 * TextInputBuilder for older discordjs versions
 */

export class TextInput {
    constructor() {
        this.type = 4;
    }
    setCustomId(e : string) {
        this.custom_id = e;
        return this;
    }
    setLabel(e : string) {
        this.label = e;
        return this;
    }
    setMaxLength(w : number) {
        this.max_length = w;
        return this;
    }
    setMinLength(w : number) {
        this.min_length = w;
        return this;
    }
    setPlaceholder(w : string) {
        this.placeholder = w;
        return this;
    }
    setRequired(w : boolean = true) {
        this.required = w;
        return this;
    }
    setStyle(e : string | number) {
        this.style = typeof e == "string" ? sty[e] ? sty[e] : 1 : e;
        return this;
    }
    setValue(e : string) {
        this.value = e;
        return this;
    }
    toJSON() {
        return {
            type: 4,
            custom_id: this.custom_id,
            label: this.label,
            max_length: this.max_length,
            min_length: this.min_length,
            placeholder: this.placeholder,
            required: this.required || false,
            style: this.style,
            value: this.value
        }
    }
    public type : number;
    public custom_id : string;
    public label : string;
    public max_length : number | null;
    public min_length : number | null;
    public placeholder : string;
    public required : boolean;
    public style : string | number;
    public value : string;
}