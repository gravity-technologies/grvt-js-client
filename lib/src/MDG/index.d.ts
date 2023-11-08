import { type IConfig } from 'interfaces';
import { MDGBook } from './book';
import { MDGTicker } from './ticker';
import { MDGTrades } from './trades';
export declare class MDG {
    readonly ticker: MDGTicker;
    readonly book: MDGBook;
    readonly trades: MDGTrades;
    constructor(config: IConfig);
}
