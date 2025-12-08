import type { AxiosRequestConfig } from 'axios'
import type {
  IAckResponse,
  IApiAggregatedAccountSummaryResponse,
  IApiCancelAllOrdersRequest,
  IApiCancelAllOrdersResponse,
  IApiCancelOrderRequest,
  IApiCancelOrderResponse,
  IApiCreateBulkOrdersRequest,
  IApiCreateBulkOrdersResponse,
  IApiCreateOrderRequest,
  IApiCreateOrderResponse,
  IApiCrossExchVaultAttestEquityRequest,
  IApiCrossExchVaultGetInvestorAllocationStatsResponse,
  IApiCrossExchVaultInvestCancelRequest,
  IApiCrossExchVaultLockRequest,
  IApiCrossExchVaultPreInternalTransferCheckRequest,
  IApiCrossExchVaultPreInternalTransferCheckResponse,
  IApiCrossExchVaultPreWithdrawCheckRequest,
  IApiCrossExchVaultPreWithdrawCheckResponse,
  IApiCrossExchVaultTriggerRedemptionRequest,
  IApiCrossExchVaultUnlockRequest,
  IApiCrossExchVaultViewInvestmentQueueRequest,
  IApiCrossExchVaultViewInvestmentQueueResponse,
  IApiCrossExchVaultViewPendingInvestmentRequest,
  IApiCrossExchVaultViewPendingInvestmentResponse,
  IApiDedustPositionRequest,
  IApiDedustPositionResponse,
  IApiDepositHistoryRequest,
  IApiDepositHistoryResponse,
  IApiFillHistoryRequest,
  IApiFillHistoryResponse,
  IApiFundingAccountSummaryResponse,
  IApiFundingPaymentHistoryRequest,
  IApiFundingPaymentHistoryResponse,
  IApiGetAllInitialLeverageRequest,
  IApiGetAllInitialLeverageResponse,
  IApiGetMarginTiersResponse,
  IApiGetOrderGroupRequest,
  IApiGetOrderGroupResponse,
  IApiGetOrderRequest,
  IApiGetOrderResponse,
  IApiGetPriceProtectionBandsResponse,
  IApiOpenOrdersRequest,
  IApiOpenOrdersResponse,
  IApiOrderHistoryRequest,
  IApiOrderHistoryResponse,
  IApiPositionsRequest,
  IApiPositionsResponse,
  IApiPreDepositCheckRequest,
  IApiPreDepositCheckResponse,
  IApiPreOrderCheckRequest,
  IApiPreOrderCheckResponse,
  IApiQueryAccountPerformanceTrendRequest,
  IApiQueryAccountPerformanceTrendResponse,
  IApiQueryAccountTodayPerformanceResponse,
  IApiQueryListFundingAccountSummaryRequest,
  IApiQueryListFundingAccountSummaryResponse,
  IApiQueryListSubAccountSummaryRequest,
  IApiQueryListSubAccountSummaryResponse,
  IApiQueryTradingAccountRiskMetricRequest,
  IApiQueryTradingAccountRiskMetricResponse,
  IApiQueryTradingPerformanceRequest,
  IApiQueryTradingPerformanceResponse,
  IApiQueryTradingPerformanceSummaryRequest,
  IApiQueryTradingPerformanceSummaryResponse,
  IApiQueryTradingPerformanceTrendRequest,
  IApiQueryTradingPerformanceTrendResponse,
  IApiQueryVaultInvestorHistoryRequest,
  IApiQueryVaultInvestorHistoryResponse,
  IApiQueryVaultInvestorHistoryStatsRequest,
  IApiQueryVaultInvestorHistoryStatsResponse,
  IApiQueryVaultManagerInvestorHistoryRequest,
  IApiQueryVaultManagerInvestorHistoryResponse,
  IApiReplaceOrdersRequest,
  IApiReplaceOrdersResponse,
  IApiSetInitialLeverageRequest,
  IApiSetInitialLeverageResponse,
  IApiSocializedLossStatusResponse,
  IApiSubAccountHistoryRequest,
  IApiSubAccountHistoryResponse,
  IApiSubAccountSummaryRequest,
  IApiSubAccountSummaryResponse,
  IApiTimedAssetExposureRequest,
  IApiTimedAssetExposureResponse,
  IApiTransferHistoryRequest,
  IApiTransferHistoryResponse,
  IApiTransferRequest,
  IApiTransferResponse,
  IApiVaultBurnTokensRequest,
  IApiVaultInvestorSummaryRequest,
  IApiVaultInvestorSummaryResponse,
  IApiVaultInvestRequest,
  IApiVaultRedeemCancelRequest,
  IApiVaultRedeemRequest,
  IApiVaultViewRedemptionQueueRequest,
  IApiVaultViewRedemptionQueueResponse,
  IApiWithdrawalHistoryRequest,
  IApiWithdrawalHistoryResponse,
  IApiWithdrawalRequest,
  IConfig
} from '../interfaces'
import { validConfig } from '../interfaces'
import { ACK_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/ack_response'
import { API_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_aggregated_account_summary_response'
import { API_CANCEL_ALL_ORDERS_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_cancel_all_orders_request'
import { API_CANCEL_ALL_ORDERS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_cancel_all_orders_response'
import { API_CANCEL_ORDER_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_cancel_order_request'
import { API_CANCEL_ORDER_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_cancel_order_response'
import { API_CREATE_BULK_ORDERS_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_create_bulk_orders_request'
import { API_CREATE_BULK_ORDERS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_create_bulk_orders_response'
import { API_CREATE_ORDER_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_create_order_request'
import { API_CREATE_ORDER_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_create_order_response'
import { API_CROSS_EXCH_VAULT_ATTEST_EQUITY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_attest_equity_request'
import { API_CROSS_EXCH_VAULT_GET_INVESTOR_ALLOCATION_STATS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_get_investor_allocation_stats_response'
import { API_CROSS_EXCH_VAULT_INVEST_CANCEL_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_invest_cancel_request'
import { API_CROSS_EXCH_VAULT_LOCK_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_lock_request'
import { API_CROSS_EXCH_VAULT_PRE_INTERNAL_TRANSFER_CHECK_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_pre_internal_transfer_check_request'
import { API_CROSS_EXCH_VAULT_PRE_INTERNAL_TRANSFER_CHECK_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_pre_internal_transfer_check_response'
import { API_CROSS_EXCH_VAULT_PRE_WITHDRAW_CHECK_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_pre_withdraw_check_request'
import { API_CROSS_EXCH_VAULT_PRE_WITHDRAW_CHECK_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_pre_withdraw_check_response'
import { API_CROSS_EXCH_VAULT_TRIGGER_REDEMPTION_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_trigger_redemption_request'
import { API_CROSS_EXCH_VAULT_UNLOCK_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_unlock_request'
import { API_CROSS_EXCH_VAULT_VIEW_INVESTMENT_QUEUE_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_view_investment_queue_request'
import { API_CROSS_EXCH_VAULT_VIEW_INVESTMENT_QUEUE_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_view_investment_queue_response'
import { API_CROSS_EXCH_VAULT_VIEW_PENDING_INVESTMENT_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_view_pending_investment_request'
import { API_CROSS_EXCH_VAULT_VIEW_PENDING_INVESTMENT_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_cross_exch_vault_view_pending_investment_response'
import { API_DEDUST_POSITION_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_dedust_position_request'
import { API_DEDUST_POSITION_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_dedust_position_response'
import { API_DEPOSIT_HISTORY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_deposit_history_request'
import { API_DEPOSIT_HISTORY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_deposit_history_response'
import { API_FILL_HISTORY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_fill_history_request'
import { API_FILL_HISTORY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_fill_history_response'
import { API_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_funding_account_summary_response'
import { API_FUNDING_PAYMENT_HISTORY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_funding_payment_history_request'
import { API_FUNDING_PAYMENT_HISTORY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_funding_payment_history_response'
import { API_GET_ALL_INITIAL_LEVERAGE_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_get_all_initial_leverage_request'
import { API_GET_ALL_INITIAL_LEVERAGE_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_get_all_initial_leverage_response'
import { API_GET_MARGIN_TIERS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_get_margin_tiers_response'
import { API_GET_ORDER_GROUP_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_get_order_group_request'
import { API_GET_ORDER_GROUP_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_get_order_group_response'
import { API_GET_ORDER_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_get_order_request'
import { API_GET_ORDER_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_get_order_response'
import { API_GET_PRICE_PROTECTION_BANDS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_get_price_protection_bands_response'
import { API_OPEN_ORDERS_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_open_orders_request'
import { API_OPEN_ORDERS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_open_orders_response'
import { API_ORDER_HISTORY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_order_history_request'
import { API_ORDER_HISTORY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_order_history_response'
import { API_POSITIONS_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_positions_request'
import { API_POSITIONS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_positions_response'
import { API_PRE_DEPOSIT_CHECK_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_pre_deposit_check_request'
import { API_PRE_DEPOSIT_CHECK_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_pre_deposit_check_response'
import { API_PRE_ORDER_CHECK_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_pre_order_check_request'
import { API_PRE_ORDER_CHECK_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_pre_order_check_response'
import { API_QUERY_ACCOUNT_PERFORMANCE_TREND_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_account_performance_trend_request'
import { API_QUERY_ACCOUNT_PERFORMANCE_TREND_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_account_performance_trend_response'
import { API_QUERY_ACCOUNT_TODAY_PERFORMANCE_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_account_today_performance_response'
import { API_QUERY_LIST_FUNDING_ACCOUNT_SUMMARY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_list_funding_account_summary_request'
import { API_QUERY_LIST_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_list_funding_account_summary_response'
import { API_QUERY_LIST_SUB_ACCOUNT_SUMMARY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_list_sub_account_summary_request'
import { API_QUERY_LIST_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_list_sub_account_summary_response'
import { API_QUERY_TRADING_ACCOUNT_RISK_METRIC_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_trading_account_risk_metric_request'
import { API_QUERY_TRADING_ACCOUNT_RISK_METRIC_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_trading_account_risk_metric_response'
import { API_QUERY_TRADING_PERFORMANCE_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_trading_performance_request'
import { API_QUERY_TRADING_PERFORMANCE_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_trading_performance_response'
import { API_QUERY_TRADING_PERFORMANCE_SUMMARY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_trading_performance_summary_request'
import { API_QUERY_TRADING_PERFORMANCE_SUMMARY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_trading_performance_summary_response'
import { API_QUERY_TRADING_PERFORMANCE_TREND_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_trading_performance_trend_request'
import { API_QUERY_TRADING_PERFORMANCE_TREND_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_trading_performance_trend_response'
import { API_QUERY_VAULT_INVESTOR_HISTORY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_vault_investor_history_request'
import { API_QUERY_VAULT_INVESTOR_HISTORY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_vault_investor_history_response'
import { API_QUERY_VAULT_INVESTOR_HISTORY_STATS_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_vault_investor_history_stats_request'
import { API_QUERY_VAULT_INVESTOR_HISTORY_STATS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_vault_investor_history_stats_response'
import { API_QUERY_VAULT_MANAGER_INVESTOR_HISTORY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_query_vault_manager_investor_history_request'
import { API_QUERY_VAULT_MANAGER_INVESTOR_HISTORY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_query_vault_manager_investor_history_response'
import { API_REPLACE_ORDERS_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_replace_orders_request'
import { API_REPLACE_ORDERS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_replace_orders_response'
import { API_SET_INITIAL_LEVERAGE_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_set_initial_leverage_request'
import { API_SET_INITIAL_LEVERAGE_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_set_initial_leverage_response'
import { API_SOCIALIZED_LOSS_STATUS_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_socialized_loss_status_response'
import { API_SUB_ACCOUNT_HISTORY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_sub_account_history_request'
import { API_SUB_ACCOUNT_HISTORY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_sub_account_history_response'
import { API_SUB_ACCOUNT_SUMMARY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_sub_account_summary_request'
import { API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_sub_account_summary_response'
import { API_TIMED_ASSET_EXPOSURE_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_timed_asset_exposure_request'
import { API_TIMED_ASSET_EXPOSURE_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_timed_asset_exposure_response'
import { API_TRANSFER_HISTORY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_transfer_history_request'
import { API_TRANSFER_HISTORY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_transfer_history_response'
import { API_TRANSFER_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_transfer_request'
import { API_TRANSFER_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_transfer_response'
import { API_VAULT_BURN_TOKENS_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_vault_burn_tokens_request'
import { API_VAULT_INVEST_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_vault_invest_request'
import { API_VAULT_INVESTOR_SUMMARY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_vault_investor_summary_request'
import { API_VAULT_INVESTOR_SUMMARY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_vault_investor_summary_response'
import { API_VAULT_REDEEM_CANCEL_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_vault_redeem_cancel_request'
import { API_VAULT_REDEEM_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_vault_redeem_request'
import { API_VAULT_VIEW_REDEMPTION_QUEUE_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_vault_view_redemption_queue_request'
import { API_VAULT_VIEW_REDEMPTION_QUEUE_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_vault_view_redemption_queue_response'
import { API_WITHDRAWAL_HISTORY_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_withdrawal_history_request'
import { API_WITHDRAWAL_HISTORY_RESPONSE_MAP } from '../interfaces/codegen/schema-maps/api_withdrawal_history_response'
import { API_WITHDRAWAL_REQUEST_MAP } from '../interfaces/codegen/schema-maps/api_withdrawal_request'
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
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as IAckResponse
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

  getPriceProtectionBands (config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/get_price_protection_bands',
      null,
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_PRICE_PROTECTION_BANDS_RESPONSE_MAP.LITE_TO_FULL) as IApiGetPriceProtectionBandsResponse
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

  vaultViewRedemptionQueue (payload: IApiVaultViewRedemptionQueueRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_view_redemption_queue',
      Utils.schemaMap(payload, API_VAULT_VIEW_REDEMPTION_QUEUE_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_VAULT_VIEW_REDEMPTION_QUEUE_RESPONSE_MAP.LITE_TO_FULL) as IApiVaultViewRedemptionQueueResponse
    }).catch(Utils.coverApiError)
  }

  vaultInvestorHistory (payload: IApiQueryVaultInvestorHistoryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_investor_history',
      Utils.schemaMap(payload, API_QUERY_VAULT_INVESTOR_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_VAULT_INVESTOR_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryVaultInvestorHistoryResponse
    }).catch(Utils.coverApiError)
  }

  vaultManagerInvestorHistory (payload: IApiQueryVaultManagerInvestorHistoryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_manager_investor_history',
      Utils.schemaMap(payload, API_QUERY_VAULT_MANAGER_INVESTOR_HISTORY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_VAULT_MANAGER_INVESTOR_HISTORY_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryVaultManagerInvestorHistoryResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * END: Vault
   */

  /**
   * START: Cross-Exchange Vault
   */

  cevAttestEquity (payload: IApiCrossExchVaultAttestEquityRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cev_attest_equity',
      Utils.schemaMap(payload, API_CROSS_EXCH_VAULT_ATTEST_EQUITY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as IAckResponse
    }).catch(Utils.coverApiError)
  }

  cevTriggerRedemption (payload: IApiCrossExchVaultTriggerRedemptionRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cev_trigger_redemption',
      Utils.schemaMap(payload, API_CROSS_EXCH_VAULT_TRIGGER_REDEMPTION_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as IAckResponse
    }).catch(Utils.coverApiError)
  }

  cevViewInvestmentQueue (payload: IApiCrossExchVaultViewInvestmentQueueRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cev_view_investment_queue',
      Utils.schemaMap(payload, API_CROSS_EXCH_VAULT_VIEW_INVESTMENT_QUEUE_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CROSS_EXCH_VAULT_VIEW_INVESTMENT_QUEUE_RESPONSE_MAP.LITE_TO_FULL) as IApiCrossExchVaultViewInvestmentQueueResponse
    }).catch(Utils.coverApiError)
  }

  cevInvest (payload: IApiVaultInvestRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cev_invest',
      Utils.schemaMap(payload, API_VAULT_INVEST_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as IAckResponse
    }).catch(Utils.coverApiError)
  }

  cevInvestCancel (payload: IApiCrossExchVaultInvestCancelRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cev_invest_cancel',
      Utils.schemaMap(payload, API_CROSS_EXCH_VAULT_INVEST_CANCEL_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as IAckResponse
    }).catch(Utils.coverApiError)
  }

  cevViewPendingInvestment (payload: IApiCrossExchVaultViewPendingInvestmentRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cev_view_pending_investment',
      Utils.schemaMap(payload, API_CROSS_EXCH_VAULT_VIEW_PENDING_INVESTMENT_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CROSS_EXCH_VAULT_VIEW_PENDING_INVESTMENT_RESPONSE_MAP.LITE_TO_FULL) as IApiCrossExchVaultViewPendingInvestmentResponse
    }).catch(Utils.coverApiError)
  }

  cevGetInvestorAllocationStats (payload = {}, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cev_get_investor_allocation_stats',
      payload,
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CROSS_EXCH_VAULT_GET_INVESTOR_ALLOCATION_STATS_RESPONSE_MAP.LITE_TO_FULL) as IApiCrossExchVaultGetInvestorAllocationStatsResponse
    }).catch(Utils.coverApiError)
  }

  cevPreInternalTransferCheck (payload: IApiCrossExchVaultPreInternalTransferCheckRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cev_pre_internal_transfer_check',
      Utils.schemaMap(payload, API_CROSS_EXCH_VAULT_PRE_INTERNAL_TRANSFER_CHECK_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CROSS_EXCH_VAULT_PRE_INTERNAL_TRANSFER_CHECK_RESPONSE_MAP.LITE_TO_FULL) as IApiCrossExchVaultPreInternalTransferCheckResponse
    }).catch(Utils.coverApiError)
  }

  cevPreWithdrawCheck (payload: IApiCrossExchVaultPreWithdrawCheckRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cev_pre_withdraw_check',
      Utils.schemaMap(payload, API_CROSS_EXCH_VAULT_PRE_WITHDRAW_CHECK_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CROSS_EXCH_VAULT_PRE_WITHDRAW_CHECK_RESPONSE_MAP.LITE_TO_FULL) as IApiCrossExchVaultPreWithdrawCheckResponse
    }).catch(Utils.coverApiError)
  }

  cevLock (payload: IApiCrossExchVaultLockRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cev_lock',
      Utils.schemaMap(payload, API_CROSS_EXCH_VAULT_LOCK_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as IAckResponse
    }).catch(Utils.coverApiError)
  }

  cevUnlock (payload: IApiCrossExchVaultUnlockRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/cev_unlock',
      Utils.schemaMap(payload, API_CROSS_EXCH_VAULT_UNLOCK_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, ACK_RESPONSE_MAP.LITE_TO_FULL) as IAckResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * END: Cross-Exchange Vault
   */

  /**
   * START: Portfolio
   */

  accountTodayPerformance (config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/account_today_performance',
      null,
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_ACCOUNT_TODAY_PERFORMANCE_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryAccountTodayPerformanceResponse
    }).catch(Utils.coverApiError)
  }

  accountPerformanceTrend (payload: IApiQueryAccountPerformanceTrendRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/account_performance_trend',
      Utils.schemaMap(payload, API_QUERY_ACCOUNT_PERFORMANCE_TREND_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_ACCOUNT_PERFORMANCE_TREND_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryAccountPerformanceTrendResponse
    }).catch(Utils.coverApiError)
  }

  tradingPerformanceSummary (payload: IApiQueryTradingPerformanceSummaryRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/trading_performance_summary',
      Utils.schemaMap(payload, API_QUERY_TRADING_PERFORMANCE_SUMMARY_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_TRADING_PERFORMANCE_SUMMARY_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryTradingPerformanceSummaryResponse
    }).catch(Utils.coverApiError)
  }

  subAccountRiskMetric (payload: IApiQueryTradingAccountRiskMetricRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/sub_account_risk_metric',
      Utils.schemaMap(payload, API_QUERY_TRADING_ACCOUNT_RISK_METRIC_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_TRADING_ACCOUNT_RISK_METRIC_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryTradingAccountRiskMetricResponse
    }).catch(Utils.coverApiError)
  }

  vaultInvestorHistoryStats (payload: IApiQueryVaultInvestorHistoryStatsRequest, config?: AxiosRequestConfig) {
    return this._axios.post(
      this._liteUrl + '/vault_investor_history_stats',
      Utils.schemaMap(payload, API_QUERY_VAULT_INVESTOR_HISTORY_STATS_REQUEST_MAP.FULL_TO_LITE, true),
      config
    ).then((response) => {
      return Utils.schemaMap(response.data, API_QUERY_VAULT_INVESTOR_HISTORY_STATS_RESPONSE_MAP.LITE_TO_FULL) as IApiQueryVaultInvestorHistoryStatsResponse
    }).catch(Utils.coverApiError)
  }

  /**
   * END: Portfolio
   */
}
