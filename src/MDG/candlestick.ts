import axios from 'axios'
import { type IConfig } from '../interfaces'

export class MDGCandlestick {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    this._fullUrl = `${config.host}/full/${config.version}`
    this._liteUrl = `${config.host}/lite/${config.version}`
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#trade-candlestick
   */
  retrieveTradeCandlestick (payload: any) {
    return axios.post(this._fullUrl + '/trade_kline', payload)
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#mark-candlestick
   */
  retrieveMarkCandlestick (payload: any) {
    return axios.post(this._fullUrl + '/mark_kline', payload)
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#index-candlestick
   */
  retrieveIndexCandlestick (payload: any) {
    return axios.post(this._fullUrl + '/index_kline', payload)
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#mid-candlestick
   */
  retrieveMidCandlestick (payload: any) {
    return axios.post(this._fullUrl + '/mid_kline', payload)
  }
}
