"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDGTicker = void 0;
const book_1 = require("./book");
const trades_1 = require("./trades");
class MDGTicker {
    constructor(config) {
        this.ticker = new MDGTicker(config);
        this.book = new book_1.MDGBook(config);
        this.trades = new trades_1.MDGTrades(config);
    }
}
exports.MDGTicker = MDGTicker;
