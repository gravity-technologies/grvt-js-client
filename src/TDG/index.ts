import { type AxiosRequestConfig } from 'axios'
import {
  API_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE_MAP,
  API_CANCEL_ALL_ORDERS_REQUEST_MAP,
  API_CANCEL_ALL_ORDERS_RESPONSE_MAP,
  API_CANCEL_ALL_RFQS_REQUEST_MAP,
  API_CANCEL_ALL_RFQS_RESPONSE_MAP,
  API_CANCEL_ALL_RFQ_QUOTES_REQUEST_MAP,
  API_CANCEL_ALL_RFQ_QUOTES_RESPONSE_MAP,
  API_CANCEL_ORDER_REQUEST_MAP,
  API_CANCEL_ORDER_RESPONSE_MAP,
  API_CANCEL_RFQ_QUOTE_REQUEST_MAP,
  API_CANCEL_RFQ_QUOTE_RESPONSE_MAP,
  API_CANCEL_RFQ_REQUEST_MAP,
  API_CANCEL_RFQ_RESPONSE_MAP,
  API_CREATE_ORDER_REQUEST_MAP,
  API_CREATE_ORDER_RESPONSE_MAP,
  API_CREATE_RFQ_QUOTE_REQUEST_MAP,
  API_CREATE_RFQ_QUOTE_RESPONSE_MAP,
  API_CREATE_RFQ_REQUEST_MAP,
  API_CREATE_RFQ_RESPONSE_MAP,
  API_DEPOSIT_HISTORY_REQUEST_MAP,
  API_DEPOSIT_HISTORY_RESPONSE_MAP,
  API_DEPOSIT_REQUEST_MAP,
  API_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP,
  API_OPEN_ORDERS_REQUEST_MAP,
  API_OPEN_ORDERS_RESPONSE_MAP,
  API_OPEN_RFQS_REQUEST_MAP,
  API_OPEN_RFQS_RESPONSE_MAP,
  API_OPEN_RFQ_QUOTES_REQUEST_MAP,
  API_OPEN_RFQ_QUOTES_RESPONSE_MAP,
  API_ORDER_HISTORY_REQUEST_MAP,
  API_ORDER_HISTORY_RESPONSE_MAP,
  API_POSITIONS_REQUEST_MAP,
  API_POSITIONS_RESPONSE_MAP,
  API_PRIVATE_TRADE_HISTORY_REQUEST_MAP,
  API_PRIVATE_TRADE_HISTORY_RESPONSE_MAP,
  API_SUB_ACCOUNT_HISTORY_REQUEST_MAP,
  API_SUB_ACCOUNT_HISTORY_RESPONSE_MAP,
  API_SUB_ACCOUNT_SUMMARY_REQUEST_MAP,
  API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP,
  API_TDG_ACK_RESPONSE_MAP,
  API_TRADE_RFQ_REQUEST_MAP,
  API_TRADE_RFQ_RESPONSE_MAP,
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
  type IApiCancelAllRfqQuotesRequest,
  type IApiCancelAllRfqQuotesResponse,
  type IApiCancelAllRfqsRequest,
  type IApiCancelAllRfqsResponse,
  type IApiCancelOrderRequest,
  type IApiCancelOrderResponse,
  type IApiCancelRfqQuoteRequest,
  type IApiCancelRfqQuoteResponse,
  type IApiCancelRfqRequest,
  type IApiCancelRfqResponse,
  type IApiCreateOrderRequest,
  type IApiCreateOrderResponse,
  type IApiCreateRfqQuoteRequest,
  type IApiCreateRfqQuoteResponse,
  type IApiCreateRfqRequest,
  type IApiCreateRfqResponse,
  type IApiDepositHistoryRequest,
  type IApiDepositHistoryResponse,
  type IApiDepositRequest,
  type IApiFundingAccountSummaryResponse,
  type IApiOpenOrdersRequest,
  type IApiOpenOrdersResponse,
  type IApiOpenRfqQuotesRequest,
  type IApiOpenRfqQuotesResponse,
  type IApiOpenRfqsRequest,
  type IApiOpenRfqsResponse,
  type IApiOrderHistoryRequest,
  type IApiOrderHistoryResponse,
  type IApiPositionsRequest,
  type IApiPositionsResponse,
  type IApiPrivateTradeHistoryRequest,
  type IApiPrivateTradeHistoryResponse,
  type IApiSubAccountHistoryRequest,
  type IApiSubAccountHistoryResponse,
  type IApiSubAccountSummaryRequest,
  type IApiSubAccountSummaryResponse,
  type IApiTradeRfqRequest,
  type IApiTradeRfqResponse,
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
      return Utils.schemaMap(response.data, API_TDG_ACK_RESPONSE_MAP.LITE_TO_FULL) as { acknowledgement: boolean }
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
      return Utils.schemaMap(response.data, API_TDG_ACK_RESPONSE_MAP.LITE_TO_FULL) as { acknowledgement: boolean }
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
      return Utils.schemaMap(response.data, API_TDG_ACK_RESPONSE_MAP.LITE_TO_FULL) as { acknowledgement: boolean }
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
   * @see https://docs.gravitymarkets.io/trading_api/#trade-history
   */
  tradeHistory (payload: IApiPrivateTradeHistoryRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/trade_history',
      Utils.schemaMap(payload, API_PRIVATE_TRADE_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_PRIVATE_TRADE_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiPrivateTradeHistoryResponse
    })
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

  /** ===== RFQ ===== */

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#create-rfq
   */
  createRfq (payload: IApiCreateRfqRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/create_rfq',
      Utils.schemaMap(payload, API_CREATE_RFQ_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CREATE_RFQ_RESPONSE_MAP.LITE_TO_FULL) as IApiCreateRfqResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-rfq
   */
  cancelRfq (payload: IApiCancelRfqRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/cancel_rfq',
      Utils.schemaMap(payload, API_CANCEL_RFQ_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_RFQ_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelRfqResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-all-rfqs
   */
  cancelAllRfqs (payload: IApiCancelAllRfqsRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/cancel_all_rfqs',
      Utils.schemaMap(payload, API_CANCEL_ALL_RFQS_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_ALL_RFQS_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelAllRfqsResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#trade-rfq
   */
  tradeRfq (payload: IApiTradeRfqRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/trade_rfq',
      Utils.schemaMap(payload, API_TRADE_RFQ_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TRADE_RFQ_RESPONSE_MAP.LITE_TO_FULL) as IApiTradeRfqResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#open-rfqs
   */
  openRfqs (payload: IApiOpenRfqsRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/open_rfqs',
      Utils.schemaMap(payload, API_OPEN_RFQS_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_OPEN_RFQS_RESPONSE_MAP.LITE_TO_FULL) as IApiOpenRfqsResponse
    })
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#rfq-history
   */
  rfqHistory () {
    throw new Error('Error: Historical data is served through our DB and may not match new data in flight, see https://docs.gravitymarkets.io/trading_api/#rfq-history')
  }

  /** ===== QUOTE ===== */

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#create-rfq-quote
   */
  createQuote (payload: IApiCreateRfqQuoteRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/quote_rfq',
      Utils.schemaMap(payload, API_CREATE_RFQ_QUOTE_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CREATE_RFQ_QUOTE_RESPONSE_MAP.LITE_TO_FULL) as IApiCreateRfqQuoteResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-rfq-quote
   */
  cancelQuote (payload: IApiCancelRfqQuoteRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/cancel_rfq_quote',
      Utils.schemaMap(payload, API_CANCEL_RFQ_QUOTE_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_RFQ_QUOTE_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelRfqQuoteResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-all-rfq-quotes
   */
  cancelAllQuotes (payload: IApiCancelAllRfqQuotesRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/cancel_all_rfq_quotes',
      Utils.schemaMap(payload, API_CANCEL_ALL_RFQ_QUOTES_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_ALL_RFQ_QUOTES_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelAllRfqQuotesResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#open-rfq-quotes
   */
  openQuotes (payload: IApiOpenRfqQuotesRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/open_rfq_quotes',
      Utils.schemaMap(payload, API_OPEN_RFQ_QUOTES_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_OPEN_RFQ_QUOTES_RESPONSE_MAP.LITE_TO_FULL) as IApiOpenRfqQuotesResponse
    })
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#rfq-quote-history
   */
  quoteHistory () {
    throw new Error('Error: Historical data is served through our DB and may not match new data in flight, see https://docs.gravitymarkets.io/trading_api/#rfq-quote-history')
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
