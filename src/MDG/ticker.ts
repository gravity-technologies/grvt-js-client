import {
  API_MINI_TICKER_REQUEST_MAP,
  API_MINI_TICKER_RESPONSE_MAP,
  API_TICKER_REQUEST_MAP,
  API_TICKER_RESPONSE_MAP,
  validConfig,
  type IAPIMiniTickerRequest,
  type IApiMiniTickerResponse,
  type IApiTickerRequest,
  type IApiTickerResponse,
  type IConfig
} from '../interfaces'
import { RestfulService } from '../services'
import { Utils } from '../utils'

export class MDGTicker {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#mini-ticker
   */
  retrieveMini (payload: IAPIMiniTickerRequest) {
    return RestfulService.post(
      this._liteUrl + '/mini',
      Utils.schemaMap(payload, API_MINI_TICKER_REQUEST_MAP.FULL_TO_LITE, true),
      { withCredentials: false }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_MINI_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IApiMiniTickerResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#ticker
   */
  retrieve (payload: IApiTickerRequest) {
    return RestfulService.post(
      this._liteUrl + '/ticker',
      Utils.schemaMap(payload, API_TICKER_REQUEST_MAP.FULL_TO_LITE, true),
      { withCredentials: false }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IApiTickerResponse
    })
  }
}
