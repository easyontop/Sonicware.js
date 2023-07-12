/// <reference types="node" />
interface gradientOptions {
    start: string;
    end: string;
    width?: number;
    height?: number;
}
export declare function gradient(options: gradientOptions): Buffer;
export {};
