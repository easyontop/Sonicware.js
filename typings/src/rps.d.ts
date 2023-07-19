/**
 * Options for RPS Function
 */
export interface RPSOptions {
    opponent: any;
}
/**
 * Win Combinations for RPS
 */
export declare const RPSCombinations: any;
/**
 * Rock Paper Scissors Game For DiscordJS
 * @param message Message sent by user
 * @param options RPS Options
 */
export declare function rps(message: any, options: RPSOptions): Promise<void>;
