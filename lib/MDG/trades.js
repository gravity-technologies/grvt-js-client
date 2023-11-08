"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDGTrades = void 0;
class MDGTrades {
    constructor(config) {
        this.fullUrl = `${config.host}/full/${config.version}/trades`;
        this.liteUrl = `${config.host}/lite/${config.version}/trades`;
    }
}
exports.MDGTrades = MDGTrades;
