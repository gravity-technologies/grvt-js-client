import { type TAxiosResponse } from '../../types/axios'
import { API_POSITIONS_REQUEST_MAP, API_POSITIONS_RESPONSE_MAP, API_SUB_ACCOUNT_SUMMARY_REQUEST_MAP, API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP, validConfig, type IApiDepositRequest, type IApiPositionsRequest, type IApiPositionsResponse, type IApiSubAccountSummaryRequest, type IApiSubAccountSummaryResponse, type IApiTransferRequest, type IConfig } from '../interfaces'
import { API_DEPOSIT_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_deposit_request'
import { API_TRANSFER_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_transfer_request'
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
   * @see https://docs.gravitymarkets.io/trading_api/#deposit
   */
  deposit (payload: IApiDepositRequest): TAxiosResponse<void> {
    return RestfulService.post(
      this._liteUrl + '/deposit',
      Utils.schemaMap(payload, API_DEPOSIT_REQUEST_MAP.FULL_TO_LITE, true)
    )
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#transfer
   */
  transfer (payload: IApiTransferRequest): TAxiosResponse<void> {
    return RestfulService.post(
      this._liteUrl + '/transfer',
      Utils.schemaMap(payload, API_TRANSFER_REQUEST_MAP.FULL_TO_LITE, true)
    )
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#withdrawal
   */
  withdrawal (payload: any) {
    return RestfulService.post(this._liteUrl + '/withdrawal', payload)
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#sub-account-summary
   */
  subAccountSummary (payload: IApiSubAccountSummaryRequest) {
    return RestfulService.post(
      this._liteUrl + '/account_summary',
      Utils.schemaMap(payload, API_SUB_ACCOUNT_SUMMARY_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiSubAccountSummaryResponse
    })
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

  positions (payload: IApiPositionsRequest) {
    return RestfulService.post(
      this._liteUrl + '/positions',
      Utils.schemaMap(payload, API_POSITIONS_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_POSITIONS_RESPONSE_MAP.LITE_TO_FULL) as IApiPositionsResponse
    })
  }
}
