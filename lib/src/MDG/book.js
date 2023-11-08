"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDGBook = void 0;
class MDGBook {
    constructor(config) {
        this.fullUrl = `${config.host}/full/${config.version}/book`;
        this.liteUrl = `${config.host}/lite/${config.version}/book`;
    }
}
exports.MDGBook = MDGBook;
