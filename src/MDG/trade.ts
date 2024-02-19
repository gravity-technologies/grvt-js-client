import {
  API_PUBLIC_TRADES_REQUEST_MAP,
  API_PUBLIC_TRADES_RESPONSE_MAP,
  validConfig,
  type IApiPublicTradesRequest,
  type IApiPublicTradesResponse,
  type IConfig
} from '../interfaces'
import { RestfulService } from '../services'
import { Utils } from '../utils'

/**
 * TODO: missing interfaces
 * @see https://docs.gravitymarkets.io/market_data_api/#historical-trades
 * @see https://docs.gravitymarkets.io/market_data_api/#settlement-price-history
 * @see https://docs.gravitymarkets.io/market_data_api/#funding-rate-history
 */
export class MDGTrade {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#recent-trades
   */
  recentTrades (payload: IApiPublicTradesRequest) {
    return RestfulService.post(
      this._liteUrl + '/trades',
      Utils.schemaMap(payload, API_PUBLIC_TRADES_REQUEST_MAP.FULL_TO_LITE, true),
      { withCredentials: false }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_PUBLIC_TRADES_RESPONSE_MAP.LITE_TO_FULL) as IApiPublicTradesResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#historical-trades
   */
  historicalTrades () {
    throw new Error('Error: This has been marked as a POST-LAUNCH feature, see https://docs.gravitymarkets.io/market_data_api/#historical-trades')
  }
}
