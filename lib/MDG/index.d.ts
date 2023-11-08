import { type IConfig } from '../interfaces/config.interface';
import { MDGBook } from './book';
import { MDGTrades } from './trades';
export declare class MDGTicker {
    readonly ticker: MDGTicker;
    readonly book: MDGBook;
    readonly trades: MDGTrades;
    constructor(config: IConfig);
}
