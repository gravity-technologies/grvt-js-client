import axios from 'axios'
import { API_MINI_TICKER_REQUEST_MAP, API_MINI_TICKER_RESPONSE_MAP, API_TICKER_REQUEST_MAP, API_TICKER_RESPONSE_MAP, validConfig, type IAPIMiniTickerRequest, type IApiMiniTickerResponse, type IApiTickerRequest, type IApiTickerResponse, type IConfig } from '../interfaces'
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
  retrieveMini (params: IAPIMiniTickerRequest) {
    return axios.get(this._liteUrl + '/mini', { params: Utils.schemaMap(params, API_MINI_TICKER_REQUEST_MAP.FULL_TO_LITE) }).then(
      (response) => {
        return Utils.schemaMap(response.data, API_MINI_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IApiMiniTickerResponse
      }
    )
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#ticker
   */
  retrieve (params: IApiTickerRequest) {
    return axios.get(this._liteUrl + '/ticker', { params: Utils.schemaMap(params, API_TICKER_REQUEST_MAP.FULL_TO_LITE) }).then(
      (response) => {
        return Utils.schemaMap(response.data, API_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IApiTickerResponse
      }
    )
  }
}
