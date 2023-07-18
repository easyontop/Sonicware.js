/**
 * @name ButtonStyles
 * @description **Style For DiscordJS Number**
 */
export const ButtonStyles : any = {
    "link": 5,
    "danger": 4,
    "success": 3,
    "secondary": 2,
    "primary": 1
}

/**
 * @name Button
 * @description ButtonBuilder for **older versions DiscordJS**
 * @class
 */

export class Button {
    public type : number;
    public style : number | string; 
    public url : any;
    public custom_id : string;
    public emoji : object;
    public label : string;
    public disabled : boolean | false;
    constructor() {
        this.type = 2;
    }
    setURL(a1 : URL) {
        this.style = 5;
        this.url = a1;
        return this;
    }
    setCustomId(id : string) {
        this.custom_id = id;
        return this;
    }
    setStyle(st : string) {
        if(typeof st == "string") {
            st = ButtonStyles[st.toLowerCase()] || 2;
        };
        this.style = st; // TypeScript thinks that will return string LOL
        return this;
    }
    setEmoji(em : string, et : string) {
        this.emoji = {
            name: em,
            id: et
        };
        return this;
    }
    setLabel(lab : string) {
        this.label = lab;
        return this;
    }
    setDisabled(b : boolean | null) {
        this.disabled = b || true;
        return this;
    }
    toJSON() {
        return {
            type: 2,
            label: this.label,
            custom_id: this.custom_id,
            style: this.style,
            url: this.url || null,
            emoji: this.emoji ? this.emoji : null,
            disabled: this.disabled || false
        };
    }
}