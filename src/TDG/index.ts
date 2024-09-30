import { type AxiosRequestConfig } from 'axios'
import {
  ACK_RESPONSE_MAP,
  API_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE_MAP,
  API_CANCEL_ALL_ORDERS_REQUEST_MAP,
  API_CANCEL_ALL_ORDERS_RESPONSE_MAP,
  API_CANCEL_ORDER_REQUEST_MAP,
  API_CANCEL_ORDER_RESPONSE_MAP,
  API_CREATE_ORDER_REQUEST_MAP,
  API_CREATE_ORDER_RESPONSE_MAP,
  API_DEPOSIT_HISTORY_REQUEST_MAP,
  API_DEPOSIT_HISTORY_RESPONSE_MAP,
  API_DEPOSIT_REQUEST_MAP,
  API_FILL_HISTORY_REQUEST_MAP,
  API_FILL_HISTORY_RESPONSE_MAP,
  API_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP,
  API_OPEN_ORDERS_REQUEST_MAP,
  API_OPEN_ORDERS_RESPONSE_MAP,
  API_ORDER_HISTORY_REQUEST_MAP,
  API_ORDER_HISTORY_RESPONSE_MAP,
  API_POSITIONS_REQUEST_MAP,
  API_POSITIONS_RESPONSE_MAP,
  API_SUB_ACCOUNT_HISTORY_REQUEST_MAP,
  API_SUB_ACCOUNT_HISTORY_RESPONSE_MAP,
  API_SUB_ACCOUNT_SUMMARY_REQUEST_MAP,
  API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP,
  API_TRANSFER_HISTORY_REQUEST_MAP,
  API_TRANSFER_HISTORY_RESPONSE_MAP,
  API_TRANSFER_REQUEST_MAP,
  API_WITHDRAWAL_HISTORY_REQUEST_MAP,
  API_WITHDRAWAL_HISTORY_RESPONSE_MAP,
  API_WITHDRAWAL_REQUEST_MAP,
  validConfig,
  type IApiAggregatedAccountSummaryResponse,
  type IApiCancelAllOrdersRequest,
  type IApiCancelAllOrdersResponse,
  type IApiCancelOrderRequest,
  type IApiCancelOrderResponse,
  type IApiCreateOrderRequest,
  type IApiCreateOrderResponse,
  type IApiDepositHistoryRequest,
  type IApiDepositHistoryResponse,
  type IApiDepositRequest,
  type IApiFillHistoryRequest,
  type IApiFillHistoryResponse,
  type IApiFundingAccountSummaryResponse,
  type IApiOpenOrdersRequest,
  type IApiOpenOrdersResponse,
  type IApiOrderHistoryRequest,
  type IApiOrderHistoryResponse,
  type IApiPositionsRequest,
  type IApiPositionsResponse,
  type IApiSubAccountHistoryRequest,
  type IApiSubAccountHistoryResponse,
  type IApiSubAccountSummaryRequest,
  type IApiSubAccountSummaryResponse,
  type IApiTransferHistoryRequest,
  type IApiTransferHistoryResponse,
  type IApiTransferRequest,
  type IApiWithdrawalHistoryRequest,
  type IApiWithdrawalHistoryResponse,
  type IApiWithdrawalRequest,
  type IConfig
} from '../interfaces'
import { RestfulService } from '../services'
import { Utils } from '../utils'

export class TDG {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
  }

  /** ===== TRANSFER ===== */

  /**
   * TODO: missing response interface
   * @see https://docs.gravitymarkets.io/trading_api/#deposit
   */
  deposit (payload: IApiDepositRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/deposit',
      Utils.schemaMap(payload, API_DEPOSIT_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as { acknowledgement: boolean }
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#deposit-history
   */
  depositHistory (payload: IApiDepositHistoryRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/deposit_history',
      Utils.schemaMap(payload, API_DEPOSIT_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_DEPOSIT_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiDepositHistoryResponse
    })
  }

  /**
   * TODO: missing response interface
   * @see https://docs.gravitymarkets.io/trading_api/#transfer
   */
  transfer (payload: IApiTransferRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/transfer',
      Utils.schemaMap(payload, API_TRANSFER_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as { acknowledgement: boolean }
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#transfer-history
   */
  transferHistory (payload: IApiTransferHistoryRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/transfer_history',
      Utils.schemaMap(payload, API_TRANSFER_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TRANSFER_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiTransferHistoryResponse
    })
  }

  /**
   * TODO: missing response interface
   * @see https://docs.gravitymarkets.io/trading_api/#withdrawal
   */
  withdrawal (payload: IApiWithdrawalRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/withdrawal',
      Utils.schemaMap(payload, API_WITHDRAWAL_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as { acknowledgement: boolean }
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#withdrawal-history
   */
  withdrawalHistory (payload: IApiWithdrawalHistoryRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/withdrawal_history',
      Utils.schemaMap(payload, API_WITHDRAWAL_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_WITHDRAWAL_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiWithdrawalHistoryResponse
    })
  }

  /** ===== ACCOUNT ===== */

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#positions
   */
  positions (payload: IApiPositionsRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/positions',
      Utils.schemaMap(payload, API_POSITIONS_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_POSITIONS_RESPONSE_MAP.LITE_TO_FULL) as IApiPositionsResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#sub-account-summary
   */
  subAccountSummary (payload: IApiSubAccountSummaryRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/account_summary',
      Utils.schemaMap(payload, API_SUB_ACCOUNT_SUMMARY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiSubAccountSummaryResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#sub-account-history
   */
  subAccountHistory (payload: IApiSubAccountHistoryRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/account_history',
      Utils.schemaMap(payload, API_SUB_ACCOUNT_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_SUB_ACCOUNT_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiSubAccountHistoryResponse
    })
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#trade-history
   */
  fillHistory (payload: IApiFillHistoryRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/fill_history',
      Utils.schemaMap(payload, API_FILL_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_FILL_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiFillHistoryResponse
    })
  }

  /**
   * @deprecated
   * Use `fillHistory` instead
   */
  tradeHistory (...args: Parameters<TDG['fillHistory']>) {
    return this.fillHistory(...args)
  }

  /** ===== ORDER ===== */

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#create-order
   */
  createOrder (payload: IApiCreateOrderRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/create_order',
      Utils.schemaMap(payload, API_CREATE_ORDER_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CREATE_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IApiCreateOrderResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-order
   */
  cancelOrder (payload: IApiCancelOrderRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/cancel_order',
      Utils.schemaMap(payload, API_CANCEL_ORDER_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelOrderResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-all-orders
   */
  cancelAllOrders (payload: IApiCancelAllOrdersRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/cancel_all_orders',
      Utils.schemaMap(payload, API_CANCEL_ALL_ORDERS_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_ALL_ORDERS_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelAllOrdersResponse
    })
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-all-session-orders
   */
  cancelAllSessionOrders () {
    throw new Error('This has been marked as a POST-LAUNCH feature, see https://docs.gravitymarkets.io/trading_api/#cancel-all-session-orders')
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#open-orders
   */
  openOrders (payload: IApiOpenOrdersRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/open_orders',
      Utils.schemaMap(payload, API_OPEN_ORDERS_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_OPEN_ORDERS_RESPONSE_MAP.LITE_TO_FULL) as IApiOpenOrdersResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#order-history
   */
  orderHistory (payload: IApiOrderHistoryRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/order_history',
      Utils.schemaMap(payload, API_ORDER_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_ORDER_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiOrderHistoryResponse
    })
  }

  /**
   * @description Missing documentation
   */
  fundingAccountSummary (config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/funding_account_summary',
      null,
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiFundingAccountSummaryResponse
    })
  }

  /**
   * @description Missing documentation
   */
  aggregatedAccountSummary (config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/aggregated_account_summary',
      null,
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiAggregatedAccountSummaryResponse
    })
  }
}
