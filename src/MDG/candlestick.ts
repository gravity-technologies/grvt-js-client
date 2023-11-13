import axios from 'axios'
import { validConfig, type IConfig } from '../interfaces'

export class MDGCandlestick {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
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
