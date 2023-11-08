"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WS = void 0;
class WS {
    constructor(url) {
        this._onopenListeners = [];
        this._ws = new WebSocket(url);
        this._ws.onopen = this._onopen;
    }
    _onopen(event) {
        for (const listener of this._onopenListeners) {
            listener(event);
        }
    }
    onopen(listener) {
        return this._onopenListeners.push(listener) - 1;
    }
}
exports.WS = WS;
