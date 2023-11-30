import { API_SUB_ACCOUNT_SUMMARY_REQUEST_MAP, API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP, validConfig, type IApiSubAccountSummaryRequest, type IApiSubAccountSummaryResponse, type IConfig } from '../interfaces'
import { RestfulService } from '../services'
import { Utils } from '../utils'

export class TDGAccount {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#deposit
   */
  deposit (params: any) {
    return RestfulService.post(this._liteUrl + '/deposit', params)
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#transfer
   */
  transfer (params: any) {
    return RestfulService.post(this._liteUrl + '/transfer', params)
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#withdrawal
   */
  withdrawal (params: any) {
    return RestfulService.post(this._liteUrl + '/withdrawal', params)
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#sub-account-summary
   */
  subAccountSummary (params: IApiSubAccountSummaryRequest) {
    return RestfulService.post(this._liteUrl + '/account_summary', Utils.schemaMap(params, API_SUB_ACCOUNT_SUMMARY_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        return Utils.schemaMap(response.data, API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiSubAccountSummaryResponse
      }
    )
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#sub-account-history
   */
  subAccountHistory (params: any) {
    return RestfulService.get(this._liteUrl + '/account_history', { params })
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#trade-history
   */
  tradeHistory (params: any) {
    return RestfulService.get(this._liteUrl + '/trade_history', { params })
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#transaction-history
   */
  transactionHistory (params: any) {
    return RestfulService.get(this._liteUrl + '/transaction_history', { params })
  }
}
