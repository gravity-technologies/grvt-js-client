import { validConfig, type IConfig } from '../interfaces'
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
    const parseConfig = validConfig(config)

    this.instrument = new MDGInstrument(parseConfig)
    this.candlestick = new MDGCandlestick(parseConfig)
    this.ticker = new MDGTicker(parseConfig)
    this.orderbook = new MDGOrderbook(parseConfig)
    this.trades = new MDGTrade(parseConfig)
  }
}
