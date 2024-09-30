import { type AxiosRequestConfig } from 'axios'
import {
  API_CANDLESTICK_REQUEST_MAP,
  API_CANDLESTICK_RESPONSE_MAP,
  API_FUNDING_RATE_REQUEST_MAP,
  API_FUNDING_RATE_RESPONSE_MAP,
  API_GET_ALL_INSTRUMENTS_REQUEST_MAP,
  API_GET_ALL_INSTRUMENTS_RESPONSE_MAP,
  API_GET_FILTERED_INSTRUMENTS_REQUEST_MAP,
  API_GET_FILTERED_INSTRUMENTS_RESPONSE_MAP,
  API_GET_INSTRUMENT_REQUEST_MAP,
  API_GET_INSTRUMENT_RESPONSE_MAP,
  API_MINI_TICKER_REQUEST_MAP,
  API_MINI_TICKER_RESPONSE_MAP,
  API_ORDERBOOK_LEVELS_REQUEST_MAP,
  API_ORDERBOOK_LEVELS_RESPONSE_MAP,
  API_SETTLEMENT_PRICE_REQUEST_MAP,
  API_SETTLEMENT_PRICE_RESPONSE_MAP,
  API_TICKER_REQUEST_MAP,
  API_TICKER_RESPONSE_MAP,
  API_TRADE_HISTORY_REQUEST_MAP,
  API_TRADE_HISTORY_RESPONSE_MAP,
  API_TRADE_REQUEST_MAP,
  API_TRADE_RESPONSE_MAP,
  validConfig,
  type IApiCandlestickRequest,
  type IApiCandlestickResponse,
  type IApiFundingRateRequest,
  type IApiFundingRateResponse,
  type IApiGetAllInstrumentsRequest,
  type IApiGetAllInstrumentsResponse,
  type IApiGetFilteredInstrumentsRequest,
  type IApiGetFilteredInstrumentsResponse,
  type IApiGetInstrumentRequest,
  type IApiGetInstrumentResponse,
  type IApiMiniTickerRequest,
  type IApiMiniTickerResponse,
  type IApiOrderbookLevelsRequest,
  type IApiOrderbookLevelsResponse,
  type IApiSettlementPriceRequest,
  type IApiSettlementPriceResponse,
  type IApiTickerRequest,
  type IApiTickerResponse,
  type IApiTradeHistoryRequest,
  type IApiTradeHistoryResponse,
  type IApiTradeRequest,
  type IApiTradeResponse,
  type IConfig
} from '../interfaces'
import { RestfulService } from '../services'
import { Utils } from '../utils'

export class MDG {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#get-instrument
   */
  instrument (payload: IApiGetInstrumentRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/instrument',
      Utils.schemaMap(payload, API_GET_INSTRUMENT_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_INSTRUMENT_RESPONSE_MAP.LITE_TO_FULL) as IApiGetInstrumentResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#get-instruments
   */
  instruments (payload: IApiGetFilteredInstrumentsRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/instruments',
      Utils.schemaMap(payload, API_GET_FILTERED_INSTRUMENTS_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_FILTERED_INSTRUMENTS_RESPONSE_MAP.LITE_TO_FULL) as IApiGetFilteredInstrumentsResponse
    })
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#get-all-instruments
   */
  allInstruments (payload: IApiGetAllInstrumentsRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/all_instruments',
      Utils.schemaMap(payload, API_GET_ALL_INSTRUMENTS_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_ALL_INSTRUMENTS_RESPONSE_MAP.LITE_TO_FULL) as IApiGetAllInstrumentsResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#mini-ticker
   */
  miniTicker (payload: IApiMiniTickerRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/mini',
      Utils.schemaMap(payload, API_MINI_TICKER_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_MINI_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IApiMiniTickerResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#ticker
   */
  ticker (payload: IApiTickerRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/ticker',
      Utils.schemaMap(payload, API_TICKER_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IApiTickerResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#orderbook
   */
  orderBook (payload: IApiOrderbookLevelsRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/book',
      Utils.schemaMap(payload, API_ORDERBOOK_LEVELS_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_ORDERBOOK_LEVELS_RESPONSE_MAP.LITE_TO_FULL) as IApiOrderbookLevelsResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#public-trades
   */
  trades (payload: IApiTradeRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/trades',
      Utils.schemaMap(payload, API_TRADE_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TRADE_RESPONSE_MAP.LITE_TO_FULL) as IApiTradeResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#public-trade-history
   */
  tradesHistory (payload: IApiTradeHistoryRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/trade_history',
      Utils.schemaMap(payload, API_TRADE_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TRADE_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiTradeHistoryResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#settlement-price
   */
  settlement (payload: IApiSettlementPriceRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/settlement',
      Utils.schemaMap(payload, API_SETTLEMENT_PRICE_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_SETTLEMENT_PRICE_RESPONSE_MAP.LITE_TO_FULL) as IApiSettlementPriceResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#funding-rate
   */
  funding (payload: IApiFundingRateRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/funding',
      Utils.schemaMap(payload, API_FUNDING_RATE_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_FUNDING_RATE_RESPONSE_MAP.LITE_TO_FULL) as IApiFundingRateResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#candlestick
   */
  candlestick (payload: IApiCandlestickRequest, config?: AxiosRequestConfig) {
    return RestfulService.post(
      this._liteUrl + '/kline',
      Utils.schemaMap(payload, API_CANDLESTICK_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANDLESTICK_RESPONSE_MAP.LITE_TO_FULL) as IApiCandlestickResponse
    })
  }
}
