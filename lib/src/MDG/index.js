"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDG = void 0;
const interfaces_1 = require("interfaces");
const book_1 = require("./book");
const ticker_1 = require("./ticker");
const trades_1 = require("./trades");
class MDG {
    constructor(config) {
        const parseConfig = (0, interfaces_1.validConfig)(config);
        this.ticker = new ticker_1.MDGTicker(parseConfig);
        this.book = new book_1.MDGBook(parseConfig);
        this.trades = new trades_1.MDGTrades(parseConfig);
    }
}
exports.MDG = MDG;
