import type { AxiosRequestConfig } from 'axios'
import type {
  IApiBatchQueryVaultDetailRequest,
  IApiBatchQueryVaultDetailResponse,
  IApiBatchQueryVaultPerformanceRequest,
  IApiBatchQueryVaultPerformanceResponse,
  IApiBatchQueryVaultRiskMetricRequest,
  IApiBatchQueryVaultRiskMetricResponse,
  IApiCandlestickRequest,
  IApiCandlestickResponse,
  IApiFundingHistoryComparisonRequest,
  IApiFundingHistoryComparisonResponse,
  IApiFundingRateRequest,
  IApiFundingRateResponse,
  IApiGetAllInstrumentsRequest,
  IApiGetAllInstrumentsResponse,
  IApiGetFilteredInstrumentsRequest,
  IApiGetFilteredInstrumentsResponse,
  IApiGetInstrumentRequest,
  IApiGetInstrumentResponse,
  IApiGetMarginRulesRequest,
  IApiGetMarginRulesResponse,
  IApiLiveFundingRateComparisonRequest,
  IApiLiveFundingRateComparisonResponse,
  IApiMiniTickerRequest,
  IApiMiniTickerResponse,
  IApiOrderbookLevelsRequest,
  IApiOrderbookLevelsResponse,
  IApiQueryListVaultSubAccountSummaryRequest,
  IApiQueryListVaultSubAccountSummaryResponse,
  IApiQuerySnapVaultPositionRequest,
  IApiQuerySnapVaultPositionResponse,
  IApiQueryVaultPerformanceTrendRequest,
  IApiQueryVaultPerformanceTrendResponse,
  IApiQueryVaultSummaryHistoryRequest,
  IApiQueryVaultSummaryHistoryResponse,
  IApiSettlementPriceRequest,
  IApiSettlementPriceResponse,
  IApiTickerRequest,
  IApiTickerResponse,
  IApiTimedAssetExposureResponse,
  IApiTimedVaultAssetExposureRequest,
  IApiTradeHistoryRequest,
  IApiTradeHistoryResponse,
  IApiTradeRequest,
  IApiTradeResponse,
  IConfig
} from '../interfaces'
import { validConfig } from '../interfaces'
import { API_BATCH_QUERY_VAULT_DETAIL_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_batch_query_vault_detail_request'
import { API_BATCH_QUERY_VAULT_DETAIL_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_batch_query_vault_detail_response'
import { API_BATCH_QUERY_VAULT_PERFORMANCE_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_batch_query_vault_performance_request'
import { API_BATCH_QUERY_VAULT_PERFORMANCE_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_batch_query_vault_performance_response'
import { API_BATCH_QUERY_VAULT_RISK_METRIC_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_batch_query_vault_risk_metric_request'
import { API_BATCH_QUERY_VAULT_RISK_METRIC_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_batch_query_vault_risk_metric_response'
import { API_CANDLESTICK_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_candlestick_request'
import { API_CANDLESTICK_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_candlestick_response'
import { API_FUNDING_HISTORY_COMPARISON_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_funding_history_comparison_request'
import { API_FUNDING_HISTORY_COMPARISON_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_funding_history_comparison_response'
import { API_FUNDING_RATE_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_funding_rate_request'
import { API_FUNDING_RATE_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_funding_rate_response'
import { API_GET_ALL_INSTRUMENTS_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_get_all_instruments_request'
import { API_GET_ALL_INSTRUMENTS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_get_all_instruments_response'
import { API_GET_FILTERED_INSTRUMENTS_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_get_filtered_instruments_request'
import { API_GET_FILTERED_INSTRUMENTS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_get_filtered_instruments_response'
import { API_GET_INSTRUMENT_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_get_instrument_request'
import { API_GET_INSTRUMENT_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_get_instrument_response'
import { API_GET_MARGIN_RULES_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_get_margin_rules_request'
import { API_GET_MARGIN_RULES_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_get_margin_rules_response'
import { API_LIVE_FUNDING_RATE_COMPARISON_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_live_funding_rate_comparison_request'
import { API_LIVE_FUNDING_RATE_COMPARISON_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_live_funding_rate_comparison_response'
import { API_MINI_TICKER_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_mini_ticker_request'
import { API_MINI_TICKER_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_mini_ticker_response'
import { API_ORDERBOOK_LEVELS_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_orderbook_levels_request'
import { API_ORDERBOOK_LEVELS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_orderbook_levels_response'
import { API_QUERY_LIST_VAULT_SUB_ACCOUNT_SUMMARY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_list_vault_sub_account_summary_request'
import { API_QUERY_LIST_VAULT_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_list_vault_sub_account_summary_response'
import { API_QUERY_SNAP_VAULT_POSITION_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_snap_vault_position_request'
import { API_QUERY_SNAP_VAULT_POSITION_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_snap_vault_position_response'
import { API_QUERY_VAULT_PERFORMANCE_TREND_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_vault_performance_trend_request'
import { API_QUERY_VAULT_PERFORMANCE_TREND_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_vault_performance_trend_response'
import { API_QUERY_VAULT_SUMMARY_HISTORY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_vault_summary_history_request'
import { API_QUERY_VAULT_SUMMARY_HISTORY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_vault_summary_history_response'
import { API_SETTLEMENT_PRICE_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_settlement_price_request'
import { API_SETTLEMENT_PRICE_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_settlement_price_response'
import { API_TICKER_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_ticker_request'
import { API_TICKER_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_ticker_response'
import { API_TIMED_ASSET_EXPOSURE_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_timed_asset_exposure_response'
import { API_TIMED_VAULT_ASSET_EXPOSURE_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_timed_vault_asset_exposure_request'
import { API_TRADE_HISTORY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_trade_history_request'
import { API_TRADE_HISTORY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_trade_history_response'
import { API_TRADE_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_trade_request'
import { API_TRADE_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_trade_response'
import { createAxiosInstance } from '../services'
import { Utils } from '../utils'

export class MDG {
  private readonly _axios = createAxiosInstance()
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
  }

  get axios () {
    return this._axios
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#get-instrument
   */
  instrument (payload: IApiGetInstrumentRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/instrument',
      Utils.schemaMap(payload, API_GET_INSTRUMENT_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_INSTRUMENT_RESPONSE_MAP.LITE_TO_FULL) as IApiGetInstrumentResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#get-instruments
   */
  instruments (payload: IApiGetFilteredInstrumentsRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/instruments',
      Utils.schemaMap(payload, API_GET_FILTERED_INSTRUMENTS_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_FILTERED_INSTRUMENTS_RESPONSE_MAP.LITE_TO_FULL) as IApiGetFilteredInstrumentsResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#get-all-instruments
   */
  allInstruments (payload: IApiGetAllInstrumentsRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/all_instruments',
      Utils.schemaMap(payload, API_GET_ALL_INSTRUMENTS_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_ALL_INSTRUMENTS_RESPONSE_MAP.LITE_TO_FULL) as IApiGetAllInstrumentsResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#mini-ticker
   */
  miniTicker (payload: IApiMiniTickerRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/mini',
      Utils.schemaMap(payload, API_MINI_TICKER_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_MINI_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IApiMiniTickerResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#ticker
   */
  ticker (payload: IApiTickerRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/ticker',
      Utils.schemaMap(payload, API_TICKER_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IApiTickerResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#orderbook
   */
  orderBook (payload: IApiOrderbookLevelsRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/book',
      Utils.schemaMap(payload, API_ORDERBOOK_LEVELS_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_ORDERBOOK_LEVELS_RESPONSE_MAP.LITE_TO_FULL) as IApiOrderbookLevelsResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#trade_1
   */
  trade (payload: IApiTradeRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/trade',
      Utils.schemaMap(payload, API_TRADE_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TRADE_RESPONSE_MAP.LITE_TO_FULL) as IApiTradeResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#trade-history
   */
  tradesHistory (payload: IApiTradeHistoryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/trade_history',
      Utils.schemaMap(payload, API_TRADE_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TRADE_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiTradeHistoryResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#settlement-price
   */
  settlement (payload: IApiSettlementPriceRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/settlement',
      Utils.schemaMap(payload, API_SETTLEMENT_PRICE_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_SETTLEMENT_PRICE_RESPONSE_MAP.LITE_TO_FULL) as IApiSettlementPriceResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#funding-rate
   */
  funding (payload: IApiFundingRateRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/funding',
      Utils.schemaMap(payload, API_FUNDING_RATE_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_FUNDING_RATE_RESPONSE_MAP.LITE_TO_FULL) as IApiFundingRateResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#candlestick
   */
  candlestick (payload: IApiCandlestickRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/kline',
      Utils.schemaMap(payload, API_CANDLESTICK_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANDLESTICK_RESPONSE_MAP.LITE_TO_FULL) as IApiCandlestickResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * SECTION: Vault
   */

  vaultAssetExposure (payload: IApiTimedVaultAssetExposureRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_asset_exposure',
      Utils.schemaMap(payload, API_TIMED_VAULT_ASSET_EXPOSURE_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TIMED_ASSET_EXPOSURE_RESPONSE_MAP.LITE_TO_FULL) as IApiTimedAssetExposureResponse
    }).catch(Utils.coverApiError)
  }

  snapVaultPosition (payload: IApiQuerySnapVaultPositionRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/snap_vault_position',
      Utils.schemaMap(payload, API_QUERY_SNAP_VAULT_POSITION_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_SNAP_VAULT_POSITION_RESPONSE_MAP.LITE_TO_FULL) as IApiQuerySnapVaultPositionResponse
    }).catch(Utils.coverApiError)
  }

  vaultDetail (payload: IApiBatchQueryVaultDetailRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_detail',
      Utils.schemaMap(payload, API_BATCH_QUERY_VAULT_DETAIL_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_BATCH_QUERY_VAULT_DETAIL_RESPONSE_MAP.LITE_TO_FULL) as IApiBatchQueryVaultDetailResponse
    }).catch(Utils.coverApiError)
  }

  vaultPerformance (payload: IApiBatchQueryVaultPerformanceRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_performance',
      Utils.schemaMap(payload, API_BATCH_QUERY_VAULT_PERFORMANCE_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_BATCH_QUERY_VAULT_PERFORMANCE_RESPONSE_MAP.LITE_TO_FULL) as IApiBatchQueryVaultPerformanceResponse
    }).catch(Utils.coverApiError)
  }

  vaultPerformanceTrend (payload: IApiQueryVaultPerformanceTrendRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_performance_trend',
      Utils.schemaMap(payload, API_QUERY_VAULT_PERFORMANCE_TREND_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_VAULT_PERFORMANCE_TREND_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryVaultPerformanceTrendResponse
    }).catch(Utils.coverApiError)
  }

  vaultRiskMetric (payload: IApiBatchQueryVaultRiskMetricRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_risk_metric',
      Utils.schemaMap(payload, API_BATCH_QUERY_VAULT_RISK_METRIC_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_BATCH_QUERY_VAULT_RISK_METRIC_RESPONSE_MAP.LITE_TO_FULL) as IApiBatchQueryVaultRiskMetricResponse
    }).catch(Utils.coverApiError)
  }

  vaultSummaryHistory (payload: IApiQueryVaultSummaryHistoryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_summary_history',
      Utils.schemaMap(payload, API_QUERY_VAULT_SUMMARY_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_VAULT_SUMMARY_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryVaultSummaryHistoryResponse
    }).catch(Utils.coverApiError)
  }

  vaultSubAccountSummaryHistory (payload: IApiQueryListVaultSubAccountSummaryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_sub_account_summary_history',
      Utils.schemaMap(payload, API_QUERY_LIST_VAULT_SUB_ACCOUNT_SUMMARY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_LIST_VAULT_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryListVaultSubAccountSummaryResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * END: Vault
   */

  /**
   * SECTION: Funding V2
   */

  liveFundingRateComparison (payload: IApiLiveFundingRateComparisonRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/live_funding_rate_comparison',
      Utils.schemaMap(payload, API_LIVE_FUNDING_RATE_COMPARISON_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_LIVE_FUNDING_RATE_COMPARISON_RESPONSE_MAP.LITE_TO_FULL) as IApiLiveFundingRateComparisonResponse
    }).catch(Utils.coverApiError)
  }

  fundingHistoryComparison (payload: IApiFundingHistoryComparisonRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/funding_history_comparison',
      Utils.schemaMap(payload, API_FUNDING_HISTORY_COMPARISON_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_FUNDING_HISTORY_COMPARISON_RESPONSE_MAP.LITE_TO_FULL) as IApiFundingHistoryComparisonResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * END: Funding V2
   */

  /**
   * START: Isolated Margin
   */

  marginRules (payload: IApiGetMarginRulesRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/margin_rules',
      Utils.schemaMap(payload, API_GET_MARGIN_RULES_REQUEST_MAP.FULL_TO_LITE, true),
      {
        ...config,
        withCredentials: false
      }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_MARGIN_RULES_RESPONSE_MAP.LITE_TO_FULL) as IApiGetMarginRulesResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * END: Isolated Margin
   */
}
