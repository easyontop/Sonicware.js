/**
 * **RobloxVersion** : Display Version
 */
export class RobloxVersion1 {
    public mobile : string;
    public windows : string;
    public mac : string;
    constructor(a1 : string, a2 : string, a3 : string) {
        this.mobile = a1;
        this.windows = a2;
        this.mac = a3;
    }
}

/**
 * Gets Roblox Version
 * @returns RobloxVersion
 */
const fetch = require("node-fetch");
export async function RobloxVersion() {
    let data = await fetch("https://api.weao.dev/status");
    data = await data.json();
    let MobileVersion = data.ROBLOX[0].ver;
    let WindowsVersion = data.ROBLOX[1].ver;
    let MacVersion = data.ROBLOX[2].ver;
    return new RobloxVersion1(MobileVersion, WindowsVersion, MacVersion);
}