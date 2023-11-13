import axios from 'axios'
import { validConfig, type IApiRecentTradeRequest, type IApiRecentTradeResponse, type IConfig } from '../interfaces'
import { API_RECENT_TRADE_REQUEST_MAP, API_RECENT_TRADE_RESPONSE_MAP, Utils } from '../utils'

/**
 * @docs Missing type definitions
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
  retrieveRecentTrades (params: IApiRecentTradeRequest) {
    return axios.post(this._liteUrl + '/trades', Utils.schemaMap(params, API_RECENT_TRADE_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        const data = Utils.schemaMap(response.data, API_RECENT_TRADE_RESPONSE_MAP.LITE_TO_FULL) as IApiRecentTradeResponse

        if (data?.results) {
          return data.results
        }

        throw new Error('RecentTrades not found')
      }
    )
  }
}
