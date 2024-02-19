import { type TAxiosResponse } from '../../types/axios'
import {
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
  API_DEPOSIT_REQUEST_MAP,
  API_OPEN_ORDERS_REQUEST_MAP,
  API_OPEN_ORDERS_RESPONSE_MAP,
  API_OPEN_RFQS_REQUEST_MAP,
  API_OPEN_RFQS_RESPONSE_MAP,
  API_OPEN_RFQ_QUOTES_REQUEST_MAP,
  API_OPEN_RFQ_QUOTES_RESPONSE_MAP,
  API_POSITIONS_REQUEST_MAP,
  API_POSITIONS_RESPONSE_MAP,
  API_SUB_ACCOUNT_SUMMARY_REQUEST_MAP,
  API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP,
  API_TRADE_RFQ_REQUEST_MAP,
  API_TRADE_RFQ_RESPONSE_MAP,
  API_TRANSFER_REQUEST_MAP,
  validConfig,
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
  type IApiDepositRequest,
  type IApiOpenOrdersRequest,
  type IApiOpenOrdersResponse,
  type IApiOpenRfqQuotesRequest,
  type IApiOpenRfqQuotesResponse,
  type IApiOpenRfqsRequest,
  type IApiOpenRfqsResponse,
  type IApiPositionsRequest,
  type IApiPositionsResponse,
  type IApiSubAccountSummaryRequest,
  type IApiSubAccountSummaryResponse,
  type IApiTradeRfqRequest,
  type IApiTradeRfqResponse,
  type IApiTransferRequest,
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

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#create-order
   */
  createOrder (payload: IApiCreateOrderRequest) {
    return RestfulService.post(
      this._liteUrl + '/create_order',
      Utils.schemaMap(payload, API_CREATE_ORDER_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CREATE_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IApiCreateOrderResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-order
   */
  cancelOrder (payload: IApiCancelOrderRequest) {
    return RestfulService.post(
      this._liteUrl + '/cancel_order',
      Utils.schemaMap(payload, API_CANCEL_ORDER_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelOrderResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-all-orders
   */
  cancelAllOrders (payload: IApiCancelAllOrdersRequest) {
    return RestfulService.post(
      this._liteUrl + '/cancel_all_orders',
      Utils.schemaMap(payload, API_CANCEL_ALL_ORDERS_REQUEST_MAP.FULL_TO_LITE, true)
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
  openOrders (payload: IApiOpenOrdersRequest) {
    return RestfulService.post(
      this._liteUrl + '/open_orders',
      Utils.schemaMap(payload, API_OPEN_ORDERS_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_OPEN_ORDERS_RESPONSE_MAP.LITE_TO_FULL) as IApiOpenOrdersResponse
    })
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#order-history
   */
  history () {
    throw new Error('Historical data is served through our DB and may not match new data in flight, see https://docs.gravitymarkets.io/trading_api/#order-history')
  }

  /**
   * SECTION: RFQ
   */

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#counterparties
   */
  counterparties () {
    throw new Error('Error: missing interfaces, see https://docs.gravitymarkets.io/trading_api/#counterparties')
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#create-rfq
   */
  createRfq (payload: IApiCreateRfqRequest) {
    return RestfulService.post(
      this._liteUrl + '/create_rfq',
      Utils.schemaMap(payload, API_CREATE_RFQ_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CREATE_RFQ_RESPONSE_MAP.LITE_TO_FULL) as IApiCreateRfqResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-rfq
   */
  cancelRfq (payload: IApiCancelRfqRequest) {
    return RestfulService.post(
      this._liteUrl + '/cancel_rfq',
      Utils.schemaMap(payload, API_CANCEL_RFQ_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_RFQ_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelRfqResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-all-rfqs
   */
  cancelAllRfqs (payload: IApiCancelAllRfqsRequest) {
    return RestfulService.post(
      this._liteUrl + '/cancel_all_rfqs',
      Utils.schemaMap(payload, API_CANCEL_ALL_RFQS_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_ALL_RFQS_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelAllRfqsResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#trade-rfq
   */
  tradeRfq (payload: IApiTradeRfqRequest) {
    return RestfulService.post(
      this._liteUrl + '/trade_rfq',
      Utils.schemaMap(payload, API_TRADE_RFQ_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TRADE_RFQ_RESPONSE_MAP.LITE_TO_FULL) as IApiTradeRfqResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#open-rfqs
   */
  openRfqs (payload: IApiOpenRfqsRequest) {
    return RestfulService.post(
      this._liteUrl + '/open_rfqs',
      Utils.schemaMap(payload, API_OPEN_RFQS_REQUEST_MAP.FULL_TO_LITE, true)
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

  /**
   * SECTION: QUOTE
   */

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#create-rfq-quote
   */
  createQuote (payload: IApiCreateRfqQuoteRequest) {
    return RestfulService.post(
      this._liteUrl + '/quote_rfq',
      Utils.schemaMap(payload, API_CREATE_RFQ_QUOTE_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CREATE_RFQ_QUOTE_RESPONSE_MAP.LITE_TO_FULL) as IApiCreateRfqQuoteResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-rfq-quote
   */
  cancelQuote (payload: IApiCancelRfqQuoteRequest) {
    return RestfulService.post(
      this._liteUrl + '/cancel_rfq_quote',
      Utils.schemaMap(payload, API_CANCEL_RFQ_QUOTE_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_RFQ_QUOTE_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelRfqQuoteResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-all-rfq-quotes
   */
  cancelAllQuotes (payload: IApiCancelAllRfqQuotesRequest) {
    return RestfulService.post(
      this._liteUrl + '/cancel_all_rfq_quotes',
      Utils.schemaMap(payload, API_CANCEL_ALL_RFQ_QUOTES_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_ALL_RFQ_QUOTES_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelAllRfqQuotesResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#open-rfq-quotes
   */
  openQuotes (payload: IApiOpenRfqQuotesRequest) {
    return RestfulService.post(
      this._liteUrl + '/open_rfq_quotes',
      Utils.schemaMap(payload, API_OPEN_RFQ_QUOTES_REQUEST_MAP.FULL_TO_LITE, true)
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
}
