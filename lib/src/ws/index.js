"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WS = void 0;
class WS {
    constructor(url) {
        this._onopenListeners = [];
        this._onmessageListeners = [];
        this._onerrorListeners = [];
        this._oncloseListeners = [];
        this._ws = new WebSocket(url);
        this._ws.onopen = (...args) => { this._onopen(...args); };
        this._ws.onmessage = (...args) => { this._onmessage(...args); };
        this._ws.onerror = (...args) => { this._onerror(...args); };
        this._ws.onclose = (...args) => { this._onclose(...args); };
    }
    _onopen(event) {
        for (const listener of this._onopenListeners) {
            listener(event);
        }
    }
    onopen(listener) {
        return this._onopenListeners.push(listener) - 1;
    }
    removeOnOpen(index) {
        this._onopenListeners.splice(index, 1);
        return this;
    }
    _onmessage(event) {
        for (const listener of this._onmessageListeners) {
            listener(event);
        }
    }
    onmessage(listener) {
        return this._onmessageListeners.push(listener) - 1;
    }
    removeOnMessage(index) {
        this._onmessageListeners.splice(index, 1);
        return this;
    }
    _onerror(event) {
        for (const listener of this._onerrorListeners) {
            listener(event);
        }
    }
    onerror(listener) {
        return this._onerrorListeners.push(listener) - 1;
    }
    removeOnError(index) {
        this._onerrorListeners.splice(index, 1);
        return this;
    }
    _onclose(event) {
        for (const listener of this._oncloseListeners) {
            listener(event);
        }
    }
    onclose(listener) {
        return this._oncloseListeners.push(listener) - 1;
    }
    removeOnClose(index) {
        this._oncloseListeners.splice(index, 1);
        return this;
    }
}
exports.WS = WS;
