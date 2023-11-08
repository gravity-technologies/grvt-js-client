export declare class WS {
    private readonly _ws;
    private readonly _onopenListeners;
    private readonly _onmessageListeners;
    private readonly _onerrorListeners;
    private readonly _oncloseListeners;
    constructor(url: string);
    private _onopen;
    onopen(listener: (ev: Event) => any): number;
    removeOnOpen(index: number): this;
    private _onmessage;
    onmessage(listener: (ev: MessageEvent) => any): number;
    removeOnMessage(index: number): this;
    private _onerror;
    onerror(listener: (ev: Event) => any): number;
    removeOnError(index: number): this;
    private _onclose;
    onclose(listener: (ev: CloseEvent) => any): number;
    removeOnClose(index: number): this;
}
