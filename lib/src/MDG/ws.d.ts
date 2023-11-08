export declare class WS {
    private readonly _ws;
    private readonly _onopenListeners;
    constructor(url: string);
    private _onopen;
    onopen(listener: (ev: Event) => any): number;
}
