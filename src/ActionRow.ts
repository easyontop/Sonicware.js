/**
 * ActionRowBuilder for much older DiscordJS Versions
 */

export class ActionRow {
    public type : number;
    public components : object[];
    constructor() {
        this.type = 1;
        this.components = [];
    }
    addComponent(cmp : object) {
        this.components.push(cmp);
        return this;
    }
    setComponents(cmp : object[]) {
        this.components = cmp;
        return this;
    }
    toJSON() {
        return {
            type: 1,
            components: this.components
        }
    }
}