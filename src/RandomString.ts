/**
 * @name RandomString
 * @description Generates Random String
 * @function
 */

export const RandomString = (Length : number | null) : string => {
    let res : string = "";
    let len = Length || 20;
    let chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    for(let y = 0; y < len; y++) {
        res += chars[Math.floor(Math.random() * chars.length)]
    };
    return res;
}