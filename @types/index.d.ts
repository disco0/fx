declare function at(i: any, j: any): any;
declare function neighbors(i: any, j: any): number;
declare function run(f: any): NodeJS.Timeout;
declare function p(s: any): boolean;
declare function esc(...x: any[]): boolean[];
declare const upper: string;
declare const lower: string;
declare const full: string;
declare const columns: number;
declare const rows: number;
declare const w: number;
declare const h: number;
declare const a: number;
declare const b: number;
declare let $: any[];
declare module "fx/config" {
    export const space: any;
    const _null: any;
    export { _null as null };
    export const number: any;
    export const boolean: any;
    export const string: any;
    export const key: any;
    export const bracket: any;
    export const comma: any;
    export const colon: any;
    export const list: any;
    export const highlight: any;
    export const highlightCurrent: any;
    export const statusBar: any;
}
declare module "fx/find" {
    export = find;
    function find(v: any, regex: any, path?: any[]): any;
}
declare module "fx/reduce" {
    export = reduce;
    function reduce(json: any, code: any): any;
}
declare module "fx/print" {
    export = print;
    function print(input: any, options?: {}): any[];
}
declare module "fx/fx" {
    function _exports(filename: any, source: any, prev?: {}): void;
    export = _exports;
}
declare module "fx/std" {
    export {};
}
declare module "fx/stream" {
    export = stream;
    function stream(from: any, cb: any): {
        isStream(): boolean;
        value(): string;
        read(): void;
    };
}
declare module "fx/test" {
    export {};
}
