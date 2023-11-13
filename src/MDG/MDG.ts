import { type IConfig } from '../interfaces'
import { MDGCandlestick } from './candlestick'
import { MDGInstrument } from './instrument'
import { MDGOrderbook } from './orderbook'
import { MDGTicker } from './ticker'
import { MDGTrade } from './trade'

export class MDG {
  readonly instrument: MDGInstrument
  readonly candlestick: MDGCandlestick
  readonly ticker: MDGTicker
  readonly orderbook: MDGOrderbook
  readonly trades: MDGTrade

  constructor (config: IConfig) {
    this.instrument = new MDGInstrument(config)
    this.candlestick = new MDGCandlestick(config)
    this.ticker = new MDGTicker(config)
    this.orderbook = new MDGOrderbook(config)
    this.trades = new MDGTrade(config)
  }
}
