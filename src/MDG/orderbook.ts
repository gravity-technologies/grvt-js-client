import { API_ORDERBOOK_LEVELS_REQUEST_MAP, API_ORDERBOOK_LEVELS_RESPONSE_MAP, validConfig, type IAPIOrderbookLevelsRequest, type IApiOrderbookLevelsResponse, type IConfig } from '../interfaces'
import { RestfulService } from '../services'
import { Utils } from '../utils'

export class MDGOrderbook {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#orderbook
   */
  retrieve (payload: IAPIOrderbookLevelsRequest) {
    return RestfulService.post(
      this._liteUrl + '/book',
      Utils.schemaMap(payload, API_ORDERBOOK_LEVELS_REQUEST_MAP.FULL_TO_LITE),
      { withCredentials: false }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_ORDERBOOK_LEVELS_RESPONSE_MAP.LITE_TO_FULL) as IApiOrderbookLevelsResponse
    })
  }
}
