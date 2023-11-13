import axios from 'axios'
import { type IAPIMiniTickerRequest, type IApiMiniTickerResponse, type IApiTickerRequest, type IApiTickerResponse, type IConfig } from '../interfaces'
import { API_MINI_TICKER_REQUEST_MAP, API_MINI_TICKER_RESPONSE_MAP, API_TICKER_REQUEST_MAP, API_TICKER_RESPONSE_MAP, Utils } from '../utils'

export class MDGTicker {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    this._fullUrl = `${config.host}/full/${config.version}`
    this._liteUrl = `${config.host}/lite/${config.version}`
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#ticker
   */
  retrieve (params: IApiTickerRequest) {
    return axios.post(this._liteUrl + '/ticker', Utils.schemaMap(params, API_TICKER_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        const data = Utils.schemaMap(response.data, API_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IApiTickerResponse

        if (data?.results) {
          return data.results
        }

        throw new Error('Ticker not found')
      }
    )
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#mini-ticker
   */
  retrieveMini (params: IAPIMiniTickerRequest) {
    return axios.post(this._liteUrl + '/mini', Utils.schemaMap(params, API_MINI_TICKER_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        const data = Utils.schemaMap(response.data, API_MINI_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IApiMiniTickerResponse

        if (data?.results) {
          return data.results
        }

        throw new Error('MiniTicker not found')
      }
    )
  }
}
