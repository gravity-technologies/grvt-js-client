"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDGTicker = void 0;
class MDGTicker {
    constructor(config) {
        this.url = `${config.host}/${config.version}/ticker`;
    }
}
exports.MDGTicker = MDGTicker;
