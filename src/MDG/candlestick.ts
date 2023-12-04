import { validConfig, type IConfig } from '../interfaces'
import { RestfulService } from '../services'

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
  tradeCandlestick (payload: any) {
    return RestfulService.post(this._fullUrl + '/trade_kline', payload, { withCredentials: false })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#mark-candlestick
   */
  markCandlestick (payload: any) {
    return RestfulService.post(this._fullUrl + '/mark_kline', payload, { withCredentials: false })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#index-candlestick
   */
  indexCandlestick (payload: any) {
    return RestfulService.post(this._fullUrl + '/index_kline', payload, { withCredentials: false })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#mid-candlestick
   */
  midCandlestick (payload: any) {
    return RestfulService.post(this._fullUrl + '/mid_kline', payload, { withCredentials: false })
  }
}
