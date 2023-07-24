/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from "node:events";
/**
 * Vacefron API
 * Use this only if you want to reduce packages installed. *class Vacefron **extends** EventEmitter*
 * @event error Error Occured
 */
export declare class Vacefron extends EventEmitter {
    private readonly baseURL;
    private readonly crewmateColors;
    /**
     * Main function making requests to the VACEFron API.
     * @param endpoint - The endpoint to make the request to.
     * @param parameters - Parameters for the request.
     * @protected
     * @see https://github.com/lavgup/VACEfron.js
     */
    protected api(endpoint: string, parameters: Record<string, string | number | boolean>): Promise<Buffer>;
    /**
     * Makes a request for the batman slap meme.
     * @param text1 - Robin's dialogue.
     * @param text2 - Batman's dialogue.
     * @param batman - Batman's avatar URL.
     * @param robin - Robin's avatar URL.
     * @see https://github.com/lavgup/VACEfron.js
     */
    batmanSlap(text1: string, text2: string, batman: string, robin: string): Promise<Buffer>;
    /**
     * Makes a request for the car reverse meme.
     * @param text - The text for the meme.
     * @see https://github.com/lavgup/VACEfron.js
     */
    carReverse(text: string): Promise<Buffer>;
    /**
     * Makes a request for the distracted boyfriend meme.
     * @param boyfriendAvatarURL - The boyfriend's avatar URL.
     * @param womanAvatarURL - The woman's avatar URL.
     * @param girlfriendAvatarURL - The girlfriend's avatar URL.
     * @see https://github.com/lavgup/VACEfron.js
     */
    distractedBoyfriend(boyfriendAvatarURL: string, womanAvatarURL: string, girlfriendAvatarURL: string): Promise<Buffer>;
    /**
     * Makes a request for a drip image.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    drip(avatarURL: string): Promise<Buffer>;
    /**
     * Makes a request for the Among Us Ejected meme.
     * @param name - The name of the user being ejected.
     * @param wasImposter - Whether this user is the imposter.
     * @param color - The color of the Among Us character being ejected.
     * @see https://github.com/lavgup/VACEfron.js
     */
    ejected(name: string, wasImposter?: boolean, color?: string): Promise<Buffer>;
    /**
     * Makes a request for the Among Us Emergency Meeting meme.
     * @param text - The text for the meme.
     * @see https://github.com/lavgup/VACEfron.js
     */
    emergencyMeeting(text: string): Promise<Buffer>;
    /**
     * Makes a request for the First Time? meme.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    firstTime(avatarURL: string): Promise<Buffer>;
    /**
     * Makes a request for a grave.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    grave(avatarURL: string): Promise<Buffer>;
    /**
     * Makes a request for the I Am Speed meme.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    iAmSpeed(avatarURL: string): Promise<Buffer>;
    /**
     * Makes a request for the I Can Milk You meme.
     * @param faceAvatarURL - The face's avatar URL.
     * @param cowAvatarURL - The cow's avatar URL.
     * @see https://github.com/lavgup/VACEfron.js
     */
    iCanMilkYou(faceAvatarURL: string, cowAvatarURL: string): Promise<Buffer>;
    /**
     * Makes a request for the heaven meme.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    heaven(avatarURL: string): Promise<Buffer>;
    /**
     * Makes a request for the NPC meme.
     * @param text1 - The first text parameter.
     * @param text2 - The second text parameter.
     * @see https://github.com/lavgup/VACEfron.js
     */
    npc(text1: string, text2: string): Promise<Buffer>;
    /**
     * Makes a request for a rankcard.
     * @param username - The username of the user levelling up.
     * @param avatarURL - The avatar of the user levelling up.
     * @param customBackgroundURL - The custom background URL of the user levelling up.
     * @param level - The level of the user.
     * @param rank - The rank of the user.
     * @param currentXP - The current amount of XP the user has.
     * @param nextLevelXP - How much XP required to reach the next level.
     * @param previousLevelXP - How much XP required to reach the previous level.
     * @param xpColor - The XP bar's fill color.
     * @param isBoosting - Whether the user is XP boosting.
     * @see https://github.com/lavgup/VACEfron.js
     */
    rankCard(username: string, avatarURL: string, customBackgroundURL: string, level: number, rank: number, currentXP: number, nextLevelXP: number, previousLevelXP: number, xpColor: string, isBoosting: boolean): Promise<Buffer>;
    /**
     * Makes a request for the Stonks (and Not Stonks) meme.
     * @param avatarURL - The avatar URL of the user.
     * @param notStonks - Whether to return a Not Stonks meme.
     * @see https://github.com/lavgup/VACEfron.js
     */
    stonks(avatarURL: string, notStonks?: boolean): Promise<Buffer>;
    /**
     * Makes a request for the table flip meme.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    tableFlip(avatarURL: string): Promise<Buffer>;
    /**
     * Makes a request for the water meme.
     * @param text - The text for the meme.
     * @see https://github.com/lavgup/VACEfron.js
     */
    water(text: string): Promise<Buffer>;
    /**
     * Widens an image.
     * @param imageURL - The image URL to widen.
     * @see https://github.com/lavgup/VACEfron.js
     */
    wide(imageURL: string): Promise<Buffer>;
    /**
     * Makes a request for the wolverine meme.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    wolverine(avatarURL: string): Promise<Buffer>;
    /**
     * Makes a request for the woman yelling at cat meme.
     * @param woman - The avatar URL of the user, for the woman.
     * @param cat - The avatar URL of the user, for the cat.
     * @see https://github.com/lavgup/VACEfron.js
     */
    womanYellingAtCat(woman: string, cat: string): Promise<Buffer>;
    /**
     * Makes a request for the dock of shame meme.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    dockOfShame(avatarURL: string): Promise<Buffer>;
}
