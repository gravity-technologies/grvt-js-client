import axios from 'axios'
import { API_CANCEL_ALL_RFQS_REQUEST_MAP, API_CANCEL_ALL_RFQS_RESPONSE_MAP, API_CANCEL_ALL_RFQ_QUOTES_REQUEST_MAP, API_CANCEL_ALL_RFQ_QUOTES_RESPONSE_MAP, API_CANCEL_RFQ_QUOTE_REQUEST_MAP, API_CANCEL_RFQ_QUOTE_RESPONSE_MAP, API_CANCEL_RFQ_REQUEST_MAP, API_CANCEL_RFQ_RESPONSE_MAP, API_CREATE_RFQ_QUOTE_REQUEST_MAP, API_CREATE_RFQ_QUOTE_RESPONSE_MAP, API_CREATE_RFQ_REQUEST_MAP, API_CREATE_RFQ_RESPONSE_MAP, API_OPEN_RFQS_REQUEST_MAP, API_OPEN_RFQS_RESPONSE_MAP, API_OPEN_RFQ_QUOTES_REQUEST_MAP, API_OPEN_RFQ_QUOTES_RESPONSE_MAP, API_TRADE_RFQ_REQUEST_MAP, API_TRADE_RFQ_RESPONSE_MAP, validConfig, type IApiCancelAllRfqQuotesRequest, type IApiCancelAllRfqQuotesResponse, type IApiCancelAllRfqsRequest, type IApiCancelAllRfqsResponse, type IApiCancelRfqQuoteRequest, type IApiCancelRfqQuoteResponse, type IApiCancelRfqRequest, type IApiCancelRfqResponse, type IApiCreateRfqQuoteRequest, type IApiCreateRfqQuoteResponse, type IApiCreateRfqRequest, type IApiCreateRfqResponse, type IApiOpenRfqQuotesRequest, type IApiOpenRfqQuotesResponse, type IApiOpenRfqsRequest, type IApiOpenRfqsResponse, type IApiTradeRfqRequest, type IApiTradeRfqResponse, type IConfig } from '../interfaces'
import { Utils } from '../utils'

export class TDGRfq {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
  }

  /**
   * SECTION: Taker
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
  createRfq (params: IApiCreateRfqRequest) {
    return axios.post(this._liteUrl + '/create_rfq', Utils.schemaMap(params, API_CREATE_RFQ_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        return Utils.schemaMap(response.data, API_CREATE_RFQ_RESPONSE_MAP.LITE_TO_FULL) as IApiCreateRfqResponse
      }
    )
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-rfq
   */
  cancelRfq (params: IApiCancelRfqRequest) {
    return axios.post(this._liteUrl + '/cancel_rfq', Utils.schemaMap(params, API_CANCEL_RFQ_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        return Utils.schemaMap(response.data, API_CANCEL_RFQ_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelRfqResponse
      }
    )
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-all-rfqs
   */
  cancelAllRfqs (params: IApiCancelAllRfqsRequest) {
    return axios.post(this._liteUrl + '/cancel_all_rfqs', Utils.schemaMap(params, API_CANCEL_ALL_RFQS_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        return Utils.schemaMap(response.data, API_CANCEL_ALL_RFQS_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelAllRfqsResponse
      }
    )
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#trade-rfq
   */
  tradeRfq (params: IApiTradeRfqRequest) {
    return axios.post(this._liteUrl + '/trade_rfq', Utils.schemaMap(params, API_TRADE_RFQ_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        return Utils.schemaMap(response.data, API_TRADE_RFQ_RESPONSE_MAP.LITE_TO_FULL) as IApiTradeRfqResponse
      }
    )
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#open-rfqs
   */
  openRfqs (params: IApiOpenRfqsRequest) {
    return axios.get(this._liteUrl + '/open_rfqs', { params: Utils.schemaMap(params, API_OPEN_RFQS_REQUEST_MAP.FULL_TO_LITE) }).then(
      (response) => {
        return Utils.schemaMap(response.data, API_OPEN_RFQS_RESPONSE_MAP.LITE_TO_FULL) as IApiOpenRfqsResponse
      }
    )
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#rfq-history
   */
  rfqHistory () {
    throw new Error('Error: Historical data is served through our DB and may not match new data in flight, see https://docs.gravitymarkets.io/trading_api/#rfq-history')
  }

  /**
   * SECTION: Maker
   */

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#create-rfq-quote
   */
  createQuote (params: IApiCreateRfqQuoteRequest) {
    return axios.post(this._liteUrl + '/quote_rfq', Utils.schemaMap(params, API_CREATE_RFQ_QUOTE_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        return Utils.schemaMap(response.data, API_CREATE_RFQ_QUOTE_RESPONSE_MAP.LITE_TO_FULL) as IApiCreateRfqQuoteResponse
      }
    )
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-rfq-quote
   */
  cancelQuote (params: IApiCancelRfqQuoteRequest) {
    return axios.post(this._liteUrl + '/cancel_rfq_quote', Utils.schemaMap(params, API_CANCEL_RFQ_QUOTE_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        return Utils.schemaMap(response.data, API_CANCEL_RFQ_QUOTE_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelRfqQuoteResponse
      }
    )
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-all-rfq-quotes
   */
  cancelAllQuotes (params: IApiCancelAllRfqQuotesRequest) {
    return axios.post(this._liteUrl + '/cancel_all_rfq_quotes', Utils.schemaMap(params, API_CANCEL_ALL_RFQ_QUOTES_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        return Utils.schemaMap(response.data, API_CANCEL_ALL_RFQ_QUOTES_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelAllRfqQuotesResponse
      }
    )
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#open-rfq-quotes
   */
  openQuotes (params: IApiOpenRfqQuotesRequest) {
    return axios.get(this._liteUrl + '/open_rfq_quotes', { params: Utils.schemaMap(params, API_OPEN_RFQ_QUOTES_REQUEST_MAP.FULL_TO_LITE) }).then(
      (response) => {
        return Utils.schemaMap(response.data, API_OPEN_RFQ_QUOTES_RESPONSE_MAP.LITE_TO_FULL) as IApiOpenRfqQuotesResponse
      }
    )
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#rfq-quote-history
   */
  quoteHistory () {
    throw new Error('Error: Historical data is served through our DB and may not match new data in flight, see https://docs.gravitymarkets.io/trading_api/#rfq-quote-history')
  }
}
