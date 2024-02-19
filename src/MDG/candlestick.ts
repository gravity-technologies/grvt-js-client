import {
  API_CANDLESTICK_REQUEST_MAP,
  API_CANDLESTICK_RESPONSE_MAP,
  validConfig,
  type IApiCandlestickRequest,
  type IApiCandlestickResponse,
  type IConfig
} from '../interfaces'
import { RestfulService } from '../services'
import { Utils } from '../utils'

export class MDGCandlestick {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#candlestick
   */
  kline (payload: IApiCandlestickRequest) {
    return RestfulService.post(
      this._liteUrl + '/kline',
      Utils.schemaMap(payload, API_CANDLESTICK_REQUEST_MAP.FULL_TO_LITE, true),
      { withCredentials: false }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANDLESTICK_RESPONSE_MAP.LITE_TO_FULL) as IApiCandlestickResponse
    })
  }
}
