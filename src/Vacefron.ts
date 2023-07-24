/*
# Vacefron API, use VACEfron.js instead if you want.
# Use this only if you want to reduce the packages installed
*/

import { EventEmitter } from "node:events";
const fetch = require("node-fetch");

/**
 * Vacefron API
 * Use this only if you want to reduce packages installed. *class Vacefron **extends** EventEmitter*
 * @event error Error Occured
 */
export class Vacefron extends EventEmitter {
    private readonly baseURL = 'https://vacefron.nl/api';
    private readonly crewmateColors = [
        'black',
        'blue',
        'brown',
        'cyan',
        'darkgreen',
        'lime',
        'orange',
        'pink',
        'purple',
        'red',
        'white',
        'yellow'
    ];

    /**
     * Main function making requests to the VACEFron API.
     * @param endpoint - The endpoint to make the request to.
     * @param parameters - Parameters for the request.
     * @protected
     * @see https://github.com/lavgup/VACEfron.js
     */
    protected async api(endpoint: string, parameters: Record<string, string | number | boolean>): Promise<Buffer> {
        for (const [key, value] of Object.entries(parameters)) {
            if (value === undefined) {
                this.emit("error", `Param "${key}" of VACEfron endpoint "${endpoint}" is undefined.`);
                throw new Error(`Param "${key}" of VACEfron endpoint "${endpoint}" is undefined.`);
            }
        }

        const params = new URLSearchParams(parameters as unknown as URLSearchParams);
        const response = await fetch(`${this.baseURL}/${endpoint}?${params}`);

        if (response.status !== 200) {
            const body = await response.json();
            this.emit(`"${endpoint}" endpoint: ${body.message} (status ${body.code})`);
            throw new Error(`"${endpoint}" endpoint: ${body.message} (status ${body.code})`);
        }

        return response.buffer();
    }

    /**
     * Makes a request for the batman slap meme.
     * @param text1 - Robin's dialogue.
     * @param text2 - Batman's dialogue.
     * @param batman - Batman's avatar URL.
     * @param robin - Robin's avatar URL.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public batmanSlap(text1: string, text2: string, batman: string, robin: string): Promise<Buffer> {
        return this.api('batmanslap', {
            text1,
            text2,
            batman,
            robin
        });
    }

    /**
     * Makes a request for the car reverse meme.
     * @param text - The text for the meme.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public carReverse(text: string): Promise<Buffer> {
        return this.api('carreverse', { text });
    }

    /**
     * Makes a request for the distracted boyfriend meme.
     * @param boyfriendAvatarURL - The boyfriend's avatar URL.
     * @param womanAvatarURL - The woman's avatar URL.
     * @param girlfriendAvatarURL - The girlfriend's avatar URL.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public distractedBoyfriend(boyfriendAvatarURL: string, womanAvatarURL: string, girlfriendAvatarURL: string): Promise<Buffer> {
        return this.api('distractedbf', {
            boyfriend: boyfriendAvatarURL,
            woman: womanAvatarURL,
            girlfriend: girlfriendAvatarURL
        });
    }

    /**
     * Makes a request for a drip image.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public drip(avatarURL: string): Promise<Buffer> {
        return this.api('drip', { user: avatarURL });
    }

    /**
     * Makes a request for the Among Us Ejected meme.
     * @param name - The name of the user being ejected.
     * @param wasImposter - Whether this user is the imposter.
     * @param color - The color of the Among Us character being ejected.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public ejected(name: string, wasImposter = Math.random() >= 0.5, color?: string): Promise<Buffer> {
        if (!color || !this.crewmateColors.includes(color.toLowerCase())) {
            color = this.crewmateColors[Math.floor(Math.random() * this.crewmateColors.length)];
        }

        return this.api('ejected', {
            name,
            imposter: wasImposter,
            crewmate: color.toLowerCase()
        });
    }

    /**
     * Makes a request for the Among Us Emergency Meeting meme.
     * @param text - The text for the meme.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public emergencyMeeting(text: string): Promise<Buffer> {
        return this.api('emergencymeeting', { text });
    }

    /**
     * Makes a request for the First Time? meme.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public firstTime(avatarURL: string): Promise<Buffer> {
        return this.api('firsttime', { user: avatarURL });
    }

    /**
     * Makes a request for a grave.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public grave(avatarURL: string): Promise<Buffer> {
        return this.api('grave', { user: avatarURL });
    }

    /**
     * Makes a request for the I Am Speed meme.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public iAmSpeed(avatarURL: string): Promise<Buffer> {
        return this.api('iamspeed', { user: avatarURL });
    }

    /**
     * Makes a request for the I Can Milk You meme.
     * @param faceAvatarURL - The face's avatar URL.
     * @param cowAvatarURL - The cow's avatar URL.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public iCanMilkYou(faceAvatarURL: string, cowAvatarURL: string): Promise<Buffer> {
        return this.api('icanmilkyou', {
            user1: faceAvatarURL,
            user2: cowAvatarURL
        });
    }

    /**
     * Makes a request for the heaven meme.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public heaven(avatarURL: string): Promise<Buffer> {
        return this.api('heaven', { user: avatarURL });
    }

    /**
     * Makes a request for the NPC meme.
     * @param text1 - The first text parameter.
     * @param text2 - The second text parameter.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public npc(text1: string, text2: string): Promise<Buffer> {
        return this.api('npc', { text1, text2 });
    }

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
    public rankCard(
        username: string,
        avatarURL: string,
        customBackgroundURL: string,
        level: number,
        rank: number,
        currentXP: number,
        nextLevelXP: number,
        previousLevelXP: number,
        xpColor: string,
        isBoosting: boolean
    ): Promise<Buffer> {
        return this.api('rankcard', {
            username: encodeURIComponent(username),
            avatar: avatarURL,
            custombg: customBackgroundURL,
            level,
            rank,
            currentxp: currentXP,
            nextlevelxp: nextLevelXP,
            previouslevelxp: previousLevelXP,
            xpcolor: xpColor.replace('#', ''),
            isboosting: isBoosting
        });
    }

    /**
     * Makes a request for the Stonks (and Not Stonks) meme.
     * @param avatarURL - The avatar URL of the user.
     * @param notStonks - Whether to return a Not Stonks meme.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public stonks(avatarURL: string, notStonks = false): Promise<Buffer> {
        return this.api('stonks', { user: avatarURL, notstonks: notStonks });
    }

    /**
     * Makes a request for the table flip meme.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public tableFlip(avatarURL: string): Promise<Buffer> {
        return this.api('tableflip', { user: avatarURL });
    }

    /**
     * Makes a request for the water meme.
     * @param text - The text for the meme.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public water(text: string): Promise<Buffer> {
        return this.api('water', { text });
    }

    /**
     * Widens an image.
     * @param imageURL - The image URL to widen.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public wide(imageURL: string): Promise<Buffer> {
        return this.api('wide', { image: imageURL });
    }

    /**
     * Makes a request for the wolverine meme.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public wolverine(avatarURL: string): Promise<Buffer> {
        return this.api('wolverine', { user: avatarURL });
    }

    /**
     * Makes a request for the woman yelling at cat meme.
     * @param woman - The avatar URL of the user, for the woman.
     * @param cat - The avatar URL of the user, for the cat.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public womanYellingAtCat(woman: string, cat: string): Promise<Buffer> {
        return this.api('womanyellingatcat', { woman, cat });
    }

    /**
     * Makes a request for the dock of shame meme.
     * @param avatarURL - The avatar URL of the user.
     * @see https://github.com/lavgup/VACEfron.js
     */
    public dockOfShame(avatarURL: string): Promise<Buffer> {
        return this.api('dockofshame', { user: avatarURL });
    }
}