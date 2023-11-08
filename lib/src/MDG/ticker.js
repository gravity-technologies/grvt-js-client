"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDGTicker = void 0;
class MDGTicker {
    constructor(config) {
        this.fullUrl = `${config.host}/full/${config.version}/ticker`;
        this.liteUrl = `${config.host}/lite/${config.version}/ticker`;
    }
}
exports.MDGTicker = MDGTicker;
