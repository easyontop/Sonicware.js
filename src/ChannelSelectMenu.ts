/**
 * @name ChannelTypes
 * @description **Channel Type to Number**
 */
export const ChannelTypes : any = {
    guildtext: 0,
    textchannel: 0,
    text: 0,
    dm: 1,
    directmessage: 1,
    guildvoice: 2,
    voicechannel: 2,
    voice: 2,
    groupdm: 3,
    groupdirectmessage: 3,
    guildcategory: 4,
    category: 4,
    guildannouncement: 5,
    announcement: 5,
    announcementthread: 10,
    publicthread: 11,
    thread: 11,
    privatethread: 12,
    privthread: 12,
    stagevoice: 13,
    guildstagevoice: 13,
    stage: 13,
    guilddirectory: 14,
    studentshub: 14,
    studenthub: 14,
    guildforum: 15,
    forum: 15
}

/**
 * ChannelSelect
 * ChannelSelectBuilder for older Discordjs versions
 * @example
 * ```js
 * const { ChannelSelect } = require("sonicware.js");
 * // ...
 * new ChannelSelect().addChannelType("FORUM").addChannelType("GUILDTEXT").setCustomId("test")
 * ```
 * @class
 */

export class ChannelSelect {
    constructor() {
      this.type = 8;
      this.channel_types = [];
    }
    setChannelType(ct : number[]) {
      this.channel_types = ct;
      return this;
    }
    addChannelType(ct : number | string) {
      this.channel_types.push(typeof ct == "string" ? ChannelTypes[ct.toLowerCase()] : ct);
      return this;
    }
    setCustomId(id : string) {
      this.custom_id = id;
      return this;
    }
    setDisabled(id = true) {
      this.disabled = id;
      return this;
    }
    setPlaceholder(d : string) {
      this.placeholder = d;
      return this;
    }
    setMinValues(d : number) {
      this.min_values = d;
      return this;
    }
    setMaxValues(d :number) {
      this.max_values = d;
      return this;
    }
    toJSON() {
      return {
        type: this.type,
        channel_types: this.channel_types,
        custom_id: this.custom_id,
        disabled: this.disabled || false,
        placeholder: this.placeholder,
        min_values: this.min_values,
        max_values: this.max_values
      }
    }
    public type : number;
    public channel_types: number[] = [];
    public custom_id: string;
    public disabled : boolean | null;
    public placeholder? : string;
    public min_values : number = 0;
    public max_values : number = 1;
}