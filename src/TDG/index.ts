import { type AxiosRequestConfig } from 'axios'
import {
  ACK_RESPONSE_MAP,
  API_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE_MAP,
  API_CANCEL_ALL_ORDERS_REQUEST_MAP,
  API_CANCEL_ALL_ORDERS_RESPONSE_MAP,
  API_CANCEL_ORDER_REQUEST_MAP,
  API_CANCEL_ORDER_RESPONSE_MAP,
  API_CREATE_BULK_ORDERS_REQUEST_MAP,
  API_CREATE_BULK_ORDERS_RESPONSE_MAP,
  API_CREATE_ORDER_REQUEST_MAP,
  API_CREATE_ORDER_RESPONSE_MAP,
  API_DEDUST_POSITION_REQUEST_MAP,
  API_DEDUST_POSITION_RESPONSE_MAP,
  API_DEPOSIT_HISTORY_REQUEST_MAP,
  API_DEPOSIT_HISTORY_RESPONSE_MAP,
  API_FILL_HISTORY_REQUEST_MAP,
  API_FILL_HISTORY_RESPONSE_MAP,
  API_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP,
  API_FUNDING_PAYMENT_HISTORY_REQUEST_MAP,
  API_FUNDING_PAYMENT_HISTORY_RESPONSE_MAP,
  API_GET_ALL_INITIAL_LEVERAGE_REQUEST_MAP,
  API_GET_ALL_INITIAL_LEVERAGE_RESPONSE_MAP,
  API_GET_MARGIN_TIERS_RESPONSE_MAP,
  API_GET_ORDER_GROUP_REQUEST_MAP,
  API_GET_ORDER_GROUP_RESPONSE_MAP,
  API_GET_ORDER_REQUEST_MAP,
  API_GET_ORDER_RESPONSE_MAP,
  API_OPEN_ORDERS_REQUEST_MAP,
  API_OPEN_ORDERS_RESPONSE_MAP,
  API_ORDER_HISTORY_REQUEST_MAP,
  API_ORDER_HISTORY_RESPONSE_MAP,
  API_POSITIONS_REQUEST_MAP,
  API_POSITIONS_RESPONSE_MAP,
  API_PRE_DEPOSIT_CHECK_REQUEST_MAP,
  API_PRE_DEPOSIT_CHECK_RESPONSE_MAP,
  API_PRE_ORDER_CHECK_REQUEST_MAP,
  API_PRE_ORDER_CHECK_RESPONSE_MAP,
  API_QUERY_LIST_FUNDING_ACCOUNT_SUMMARY_REQUEST_MAP,
  API_QUERY_LIST_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP,
  API_QUERY_LIST_SUB_ACCOUNT_SUMMARY_REQUEST_MAP,
  API_QUERY_LIST_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP,
  API_QUERY_TRADING_PERFORMANCE_REQUEST_MAP,
  API_QUERY_TRADING_PERFORMANCE_RESPONSE_MAP,
  API_QUERY_TRADING_PERFORMANCE_TREND_REQUEST_MAP,
  API_QUERY_TRADING_PERFORMANCE_TREND_RESPONSE_MAP,
  API_REPLACE_ORDERS_REQUEST_MAP,
  API_REPLACE_ORDERS_RESPONSE_MAP,
  API_SET_INITIAL_LEVERAGE_REQUEST_MAP,
  API_SET_INITIAL_LEVERAGE_RESPONSE_MAP,
  API_SOCIALIZED_LOSS_STATUS_RESPONSE_MAP,
  API_SUB_ACCOUNT_HISTORY_REQUEST_MAP,
  API_SUB_ACCOUNT_HISTORY_RESPONSE_MAP,
  API_SUB_ACCOUNT_SUMMARY_REQUEST_MAP,
  API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP,
  API_TIMED_ASSET_EXPOSURE_REQUEST_MAP,
  API_TIMED_ASSET_EXPOSURE_RESPONSE_MAP,
  API_TRANSFER_HISTORY_REQUEST_MAP,
  API_TRANSFER_HISTORY_RESPONSE_MAP,
  API_TRANSFER_REQUEST_MAP,
  API_TRANSFER_RESPONSE_MAP,
  API_VAULT_BURN_TOKENS_REQUEST_MAP,
  API_VAULT_INVEST_REQUEST_MAP,
  API_VAULT_INVESTOR_SUMMARY_REQUEST_MAP,
  API_VAULT_INVESTOR_SUMMARY_RESPONSE_MAP,
  API_VAULT_REDEEM_CANCEL_REQUEST_MAP,
  API_VAULT_REDEEM_REQUEST_MAP,
  API_WITHDRAWAL_HISTORY_REQUEST_MAP,
  API_WITHDRAWAL_HISTORY_RESPONSE_MAP,
  API_WITHDRAWAL_REQUEST_MAP,
  validConfig,
  type IAckResponse,
  type IApiAggregatedAccountSummaryResponse,
  type IApiCancelAllOrdersRequest,
  type IApiCancelAllOrdersResponse,
  type IApiCancelOrderRequest,
  type IApiCancelOrderResponse,
  type IApiCreateBulkOrdersRequest,
  type IApiCreateBulkOrdersResponse,
  type IApiCreateOrderRequest,
  type IApiCreateOrderResponse,
  type IApiDedustPositionRequest,
  type IApiDedustPositionResponse,
  type IApiDepositHistoryRequest,
  type IApiDepositHistoryResponse,
  type IApiFillHistoryRequest,
  type IApiFillHistoryResponse,
  type IApiFundingAccountSummaryResponse,
  type IApiFundingPaymentHistoryRequest,
  type IApiFundingPaymentHistoryResponse,
  type IApiGetAllInitialLeverageRequest,
  type IApiGetAllInitialLeverageResponse,
  type IApiGetMarginTiersResponse,
  type IApiGetOrderGroupRequest,
  type IApiGetOrderGroupResponse,
  type IApiGetOrderRequest,
  type IApiGetOrderResponse,
  type IApiOpenOrdersRequest,
  type IApiOpenOrdersResponse,
  type IApiOrderHistoryRequest,
  type IApiOrderHistoryResponse,
  type IApiPositionsRequest,
  type IApiPositionsResponse,
  type IApiPreDepositCheckRequest,
  type IApiPreDepositCheckResponse,
  type IApiPreOrderCheckRequest,
  type IApiPreOrderCheckResponse,
  type IApiQueryListFundingAccountSummaryRequest,
  type IApiQueryListFundingAccountSummaryResponse,
  type IApiQueryListSubAccountSummaryRequest,
  type IApiQueryListSubAccountSummaryResponse,
  type IApiQueryTradingPerformanceRequest,
  type IApiQueryTradingPerformanceResponse,
  type IApiQueryTradingPerformanceTrendRequest,
  type IApiQueryTradingPerformanceTrendResponse,
  type IApiReplaceOrdersRequest,
  type IApiReplaceOrdersResponse,
  type IApiSetInitialLeverageRequest,
  type IApiSetInitialLeverageResponse,
  type IApiSocializedLossStatusResponse,
  type IApiSubAccountHistoryRequest,
  type IApiSubAccountHistoryResponse,
  type IApiSubAccountSummaryRequest,
  type IApiSubAccountSummaryResponse,
  type IApiTimedAssetExposureRequest,
  type IApiTimedAssetExposureResponse,
  type IApiTransferHistoryRequest,
  type IApiTransferHistoryResponse,
  type IApiTransferRequest,
  type IApiTransferResponse,
  type IApiVaultBurnTokensRequest,
  type IApiVaultInvestorSummaryRequest,
  type IApiVaultInvestorSummaryResponse,
  type IApiVaultInvestRequest,
  type IApiVaultRedeemCancelRequest,
  type IApiVaultRedeemRequest,
  type IApiWithdrawalHistoryRequest,
  type IApiWithdrawalHistoryResponse,
  type IApiWithdrawalRequest,
  type IConfig
} from '../interfaces'
import { createAxiosInstance } from '../services'
import { Utils } from '../utils'

export class TDG {
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

  /** ===== TRANSFER ===== */

  /**
   * @see https://api-docs.grvt.io/trading_api/#predepositcheck
   */
  preDepositCheck (payload: IApiPreDepositCheckRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/pre_deposit_check',
      Utils.schemaMap(payload, API_PRE_DEPOSIT_CHECK_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_PRE_DEPOSIT_CHECK_RESPONSE_MAP.LITE_TO_FULL) as IApiPreDepositCheckResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#deposit-history
   */
  depositHistory (payload: IApiDepositHistoryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/deposit_history',
      Utils.schemaMap(payload, API_DEPOSIT_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_DEPOSIT_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiDepositHistoryResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#transfer
   */
  transfer (payload: IApiTransferRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/transfer',
      Utils.schemaMap(payload, API_TRANSFER_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TRANSFER_RESPONSE_MAP.LITE_TO_FULL) as IApiTransferResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#transfer-history
   */
  transferHistory (payload: IApiTransferHistoryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/transfer_history',
      Utils.schemaMap(payload, API_TRANSFER_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TRANSFER_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiTransferHistoryResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#withdrawal
   */
  withdrawal (payload: IApiWithdrawalRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/withdrawal',
      Utils.schemaMap(payload, API_WITHDRAWAL_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as { acknowledgement: boolean }
    }).catch(Utils.coverApiError)
  }

  socializedLossStatus (config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/socialized_loss_status',
      {},
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_SOCIALIZED_LOSS_STATUS_RESPONSE_MAP.LITE_TO_FULL) as IApiSocializedLossStatusResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#withdrawal-history
   */
  withdrawalHistory (payload: IApiWithdrawalHistoryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/withdrawal_history',
      Utils.schemaMap(payload, API_WITHDRAWAL_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_WITHDRAWAL_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiWithdrawalHistoryResponse
    }).catch(Utils.coverApiError)
  }

  /** ===== ACCOUNT ===== */

  /**
   * @see https://api-docs.grvt.io/trading_api/#positions
   */
  positions (payload: IApiPositionsRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/positions',
      Utils.schemaMap(payload, API_POSITIONS_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_POSITIONS_RESPONSE_MAP.LITE_TO_FULL) as IApiPositionsResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#sub-account-summary
   */
  subAccountSummary (payload: IApiSubAccountSummaryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/account_summary',
      Utils.schemaMap(payload, API_SUB_ACCOUNT_SUMMARY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiSubAccountSummaryResponse
    }).catch(Utils.coverApiError)
  }

  subAccountSummaryHistory (payload: IApiQueryListSubAccountSummaryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/sub_account_summary_history',
      Utils.schemaMap(payload, API_QUERY_LIST_SUB_ACCOUNT_SUMMARY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_LIST_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryListSubAccountSummaryResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#sub-account-history
   */
  subAccountHistory (payload: IApiSubAccountHistoryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/account_history',
      Utils.schemaMap(payload, API_SUB_ACCOUNT_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_SUB_ACCOUNT_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiSubAccountHistoryResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/market_data_api/#trade-history
   */
  fillHistory (payload: IApiFillHistoryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/fill_history',
      Utils.schemaMap(payload, API_FILL_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_FILL_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiFillHistoryResponse
    }).catch(Utils.coverApiError)
  }

  /** ===== ORDER ===== */

  /**
   * @see https://api-docs.grvt.io/trading_api/#create-order
   */
  createOrder (payload: IApiCreateOrderRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/create_order',
      Utils.schemaMap(payload, API_CREATE_ORDER_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CREATE_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IApiCreateOrderResponse
    }).catch(Utils.coverApiError)
  }

  createBulkOrders (payload: IApiCreateBulkOrdersRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/create_bulk_orders',
      Utils.schemaMap(payload, API_CREATE_BULK_ORDERS_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CREATE_BULK_ORDERS_RESPONSE_MAP.LITE_TO_FULL) as IApiCreateBulkOrdersResponse
    }).catch(Utils.coverApiError)
  }

  preOrderCheck (payload: IApiPreOrderCheckRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/pre_order_check',
      Utils.schemaMap(payload, API_PRE_ORDER_CHECK_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_PRE_ORDER_CHECK_RESPONSE_MAP.LITE_TO_FULL) as IApiPreOrderCheckResponse
    }).catch(Utils.coverApiError)
  }

  dedustPosition (payload: IApiDedustPositionRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/dedust_position',
      Utils.schemaMap(payload, API_DEDUST_POSITION_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_DEDUST_POSITION_RESPONSE_MAP.LITE_TO_FULL) as IApiDedustPositionResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#cancel-order
   */
  cancelOrder (payload: IApiCancelOrderRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cancel_order',
      Utils.schemaMap(payload, API_CANCEL_ORDER_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelOrderResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#cancel-all-orders
   */
  cancelAllOrders (payload: IApiCancelAllOrdersRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cancel_all_orders',
      Utils.schemaMap(payload, API_CANCEL_ALL_ORDERS_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_ALL_ORDERS_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelAllOrdersResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#get-order
   */
  order (payload: IApiGetOrderRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/order',
      Utils.schemaMap(payload, API_GET_ORDER_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IApiGetOrderResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#open-orders
   */
  openOrders (payload: IApiOpenOrdersRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/open_orders',
      Utils.schemaMap(payload, API_OPEN_ORDERS_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_OPEN_ORDERS_RESPONSE_MAP.LITE_TO_FULL) as IApiOpenOrdersResponse
    }).catch(Utils.coverApiError)
  }

  orderGroup (payload: IApiGetOrderGroupRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/order_group',
      Utils.schemaMap(payload, API_GET_ORDER_GROUP_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_ORDER_GROUP_RESPONSE_MAP.LITE_TO_FULL) as IApiGetOrderGroupResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * Replace position's TP/SL orders
   */
  replaceOrders (payload: IApiReplaceOrdersRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/replace_orders',
      Utils.schemaMap(payload, API_REPLACE_ORDERS_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_REPLACE_ORDERS_RESPONSE_MAP.LITE_TO_FULL) as IApiReplaceOrdersResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#order-history
   */
  orderHistory (payload: IApiOrderHistoryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/order_history',
      Utils.schemaMap(payload, API_ORDER_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_ORDER_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiOrderHistoryResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#get-all-initial-leverage
   */
  getAllInitialLeverage (payload: IApiGetAllInitialLeverageRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/get_all_initial_leverage',
      Utils.schemaMap(payload, API_GET_ALL_INITIAL_LEVERAGE_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_ALL_INITIAL_LEVERAGE_RESPONSE_MAP.LITE_TO_FULL) as IApiGetAllInitialLeverageResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#set-initial-leverage
   */
  setInitialLeverage (payload: IApiSetInitialLeverageRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/set_initial_leverage',
      Utils.schemaMap(payload, API_SET_INITIAL_LEVERAGE_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_SET_INITIAL_LEVERAGE_RESPONSE_MAP.LITE_TO_FULL) as IApiSetInitialLeverageResponse
    }).catch(Utils.coverApiError)
  }

  getMarginTiers (config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/get_margin_tiers',
      null,
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_MARGIN_TIERS_RESPONSE_MAP.LITE_TO_FULL) as IApiGetMarginTiersResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#funding-payment-history
   */
  fundingPaymentHistory (payload: IApiFundingPaymentHistoryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/funding_payment_history',
      Utils.schemaMap(payload, API_FUNDING_PAYMENT_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_FUNDING_PAYMENT_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiFundingPaymentHistoryResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#funding-account-summary
   */
  fundingAccountSummary (config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/funding_account_summary',
      null,
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiFundingAccountSummaryResponse
    }).catch(Utils.coverApiError)
  }

  fundingAccountSummaryHistory (payload: IApiQueryListFundingAccountSummaryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/funding_account_summary_history',
      Utils.schemaMap(payload, API_QUERY_LIST_FUNDING_ACCOUNT_SUMMARY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_LIST_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryListFundingAccountSummaryResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * @see https://api-docs.grvt.io/trading_api/#aggregated-account-summary
   */
  aggregatedAccountSummary (config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/aggregated_account_summary',
      null,
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiAggregatedAccountSummaryResponse
    }).catch(Utils.coverApiError)
  }

  tradingPerformance (payload: IApiQueryTradingPerformanceRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/trading_performance',
      Utils.schemaMap(payload, API_QUERY_TRADING_PERFORMANCE_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_TRADING_PERFORMANCE_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryTradingPerformanceResponse
    }).catch(Utils.coverApiError)
  }

  tradingPerformanceTrend (payload: IApiQueryTradingPerformanceTrendRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/trading_performance_trend',
      Utils.schemaMap(payload, API_QUERY_TRADING_PERFORMANCE_TREND_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_TRADING_PERFORMANCE_TREND_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryTradingPerformanceTrendResponse
    }).catch(Utils.coverApiError)
  }

  assetExposure (payload: IApiTimedAssetExposureRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/asset_exposure',
      Utils.schemaMap(payload, API_TIMED_ASSET_EXPOSURE_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_TIMED_ASSET_EXPOSURE_RESPONSE_MAP.LITE_TO_FULL) as IApiTimedAssetExposureResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * START: Vault
   */

  vaultBurnTokens (payload: IApiVaultBurnTokensRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_burn_tokens',
      Utils.schemaMap(payload, API_VAULT_BURN_TOKENS_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as IAckResponse
    }).catch(Utils.coverApiError)
  }

  vaultInvest (payload: IApiVaultInvestRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_invest',
      Utils.schemaMap(payload, API_VAULT_INVEST_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as IAckResponse
    }).catch(Utils.coverApiError)
  }

  vaultInvestorSummary (payload: IApiVaultInvestorSummaryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_investor_summary',
      Utils.schemaMap(payload, API_VAULT_INVESTOR_SUMMARY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_VAULT_INVESTOR_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiVaultInvestorSummaryResponse
    }).catch(Utils.coverApiError)
  }

  vaultRedeem (payload: IApiVaultRedeemRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_redeem',
      Utils.schemaMap(payload, API_VAULT_REDEEM_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as IAckResponse
    }).catch(Utils.coverApiError)
  }

  vaultRedeemCancel (payload: IApiVaultRedeemCancelRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_redeem_cancel',
      Utils.schemaMap(payload, API_VAULT_REDEEM_CANCEL_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as IAckResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * END: Vault
   */
}
