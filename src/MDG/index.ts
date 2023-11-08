import { validConfig, type IConfig } from 'interfaces'
import { MDGBook } from './book'
import { MDGTicker } from './ticker'
import { MDGTrades } from './trades'

export class MDG {
  readonly ticker: MDGTicker
  readonly book: MDGBook
  readonly trades: MDGTrades

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)

    this.ticker = new MDGTicker(parseConfig)
    this.book = new MDGBook(parseConfig)
    this.trades = new MDGTrades(parseConfig)
  }
}
