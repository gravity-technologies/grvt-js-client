import {
  EBridgeType,
  EBrokerTag,
  ECancelStatus,
  ECandlestickInterval,
  ECandlestickType,
  EEpochBadgeType,
  EInstrumentSettlementPeriod,
  EKind,
  EMarginType,
  EOrderRejectReason,
  EOrderStatus,
  EQueryMainAccountLeaderboardOrderBy,
  ERewardEpochStatus,
  ERewardProgramType,
  ESource,
  ESubAccountTradeInterval,
  ETimeInForce,
  ETimeInterval,
  ETransactionType,
  ETransferType,
  ETriggerBy,
  ETriggerType,
  EVaultType,
  EVenue
} from './data.interface'

export const EBridgeTypeInt: Record<EBridgeType, number> = Object.freeze({
  [EBridgeType.XY]: 1,
  [EBridgeType.RHINO]: 2
})

export const EBrokerTagInt: Record<EBrokerTag, number> = Object.freeze({
  [EBrokerTag.UNSPECIFIED]: 0,
  [EBrokerTag.COIN_ROUTES]: 1,
  [EBrokerTag.ALERTATRON]: 2,
  [EBrokerTag.ORIGAMI]: 3
})

export const ECancelStatusInt: Record<ECancelStatus, number> = Object.freeze({
  [ECancelStatus.EXPIRED]: 1,
  [ECancelStatus.DROPPED_DUPLICATE]: 2
})

export const ECandlestickIntervalInt: Record<ECandlestickInterval, number> = Object.freeze({
  [ECandlestickInterval.CI_1_M]: 1,
  [ECandlestickInterval.CI_3_M]: 2,
  [ECandlestickInterval.CI_5_M]: 3,
  [ECandlestickInterval.CI_15_M]: 4,
  [ECandlestickInterval.CI_30_M]: 5,
  [ECandlestickInterval.CI_1_H]: 6,
  [ECandlestickInterval.CI_2_H]: 7,
  [ECandlestickInterval.CI_4_H]: 8,
  [ECandlestickInterval.CI_6_H]: 9,
  [ECandlestickInterval.CI_8_H]: 10,
  [ECandlestickInterval.CI_12_H]: 11,
  [ECandlestickInterval.CI_1_D]: 12,
  [ECandlestickInterval.CI_3_D]: 13,
  [ECandlestickInterval.CI_5_D]: 14,
  [ECandlestickInterval.CI_1_W]: 15,
  [ECandlestickInterval.CI_2_W]: 16,
  [ECandlestickInterval.CI_3_W]: 17,
  [ECandlestickInterval.CI_4_W]: 18
})

export const ECandlestickTypeInt: Record<ECandlestickType, number> = Object.freeze({
  [ECandlestickType.TRADE]: 1,
  [ECandlestickType.MARK]: 2,
  [ECandlestickType.INDEX]: 3,
  [ECandlestickType.MID]: 4
})

export const EEpochBadgeTypeInt: Record<EEpochBadgeType, number> = Object.freeze({
  [EEpochBadgeType.CHAMPION]: 1,
  [EEpochBadgeType.LEGEND]: 2,
  [EEpochBadgeType.VETERAN]: 3,
  [EEpochBadgeType.ELITE]: 4,
  [EEpochBadgeType.MASTER]: 5,
  [EEpochBadgeType.EXPERT]: 6,
  [EEpochBadgeType.WARRIOR]: 7,
  [EEpochBadgeType.SERGEANT]: 8,
  [EEpochBadgeType.RANGER]: 9,
  [EEpochBadgeType.CHALLENGER]: 10,
  [EEpochBadgeType.APPRENTICE]: 11,
  [EEpochBadgeType.ROOKIE]: 12
})

export const EInstrumentSettlementPeriodInt: Record<EInstrumentSettlementPeriod, number> = Object.freeze({
  [EInstrumentSettlementPeriod.PERPETUAL]: 1,
  [EInstrumentSettlementPeriod.DAILY]: 2,
  [EInstrumentSettlementPeriod.WEEKLY]: 3,
  [EInstrumentSettlementPeriod.MONTHLY]: 4,
  [EInstrumentSettlementPeriod.QUARTERLY]: 5
})

export const EKindInt: Record<EKind, number> = Object.freeze({
  [EKind.PERPETUAL]: 1,
  [EKind.FUTURE]: 2,
  [EKind.CALL]: 3,
  [EKind.PUT]: 4
})

export const EMarginTypeInt: Record<EMarginType, number> = Object.freeze({
  [EMarginType.SIMPLE_CROSS_MARGIN]: 2,
  [EMarginType.PORTFOLIO_CROSS_MARGIN]: 3
})

export const EOrderRejectReasonInt: Record<EOrderRejectReason, number> = Object.freeze({
  [EOrderRejectReason.UNSPECIFIED]: 0,
  [EOrderRejectReason.CLIENT_CANCEL]: 1,
  [EOrderRejectReason.CLIENT_BULK_CANCEL]: 2,
  [EOrderRejectReason.CLIENT_SESSION_END]: 3,
  [EOrderRejectReason.MARKET_CANCEL]: 4,
  [EOrderRejectReason.IOC_CANCEL]: 5,
  [EOrderRejectReason.AON_CANCEL]: 6,
  [EOrderRejectReason.FOK_CANCEL]: 7,
  [EOrderRejectReason.EXPIRED]: 8,
  [EOrderRejectReason.FAIL_POST_ONLY]: 9,
  [EOrderRejectReason.FAIL_REDUCE_ONLY]: 10,
  [EOrderRejectReason.MM_PROTECTION]: 11,
  [EOrderRejectReason.SELF_TRADE_PROTECTION]: 12,
  [EOrderRejectReason.SELF_MATCHED_SUBACCOUNT]: 13,
  [EOrderRejectReason.OVERLAPPING_CLIENT_ORDER_ID]: 14,
  [EOrderRejectReason.BELOW_MARGIN]: 15,
  [EOrderRejectReason.LIQUIDATION]: 16,
  [EOrderRejectReason.INSTRUMENT_INVALID]: 17,
  [EOrderRejectReason.INSTRUMENT_DEACTIVATED]: 18,
  [EOrderRejectReason.SYSTEM_FAILOVER]: 19,
  [EOrderRejectReason.UNAUTHORISED]: 20,
  [EOrderRejectReason.SESSION_KEY_EXPIRED]: 21,
  [EOrderRejectReason.SUB_ACCOUNT_NOT_FOUND]: 22,
  [EOrderRejectReason.NO_TRADE_PERMISSION]: 23,
  [EOrderRejectReason.UNSUPPORTED_TIME_IN_FORCE]: 24,
  [EOrderRejectReason.MULTI_LEGGED_ORDER]: 25,
  [EOrderRejectReason.EXCEED_MAX_POSITION_SIZE]: 26,
  [EOrderRejectReason.EXCEED_MAX_SIGNATURE_EXPIRATION]: 27,
  [EOrderRejectReason.MARKET_ORDER_WITH_LIMIT_PRICE]: 28,
  [EOrderRejectReason.CLIENT_CANCEL_ON_DISCONNECT_TRIGGERED]: 29,
  [EOrderRejectReason.OCO_COUNTER_PART_TRIGGERED]: 30,
  [EOrderRejectReason.REDUCE_ONLY_LIMIT]: 31,
  [EOrderRejectReason.CLIENT_REPLACE]: 32,
  [EOrderRejectReason.DERISK_MUST_BE_IOC]: 33,
  [EOrderRejectReason.DERISK_MUST_BE_REDUCE_ONLY]: 34,
  [EOrderRejectReason.DERISK_NOT_SUPPORTED]: 35,
  [EOrderRejectReason.INVALID_ORDER_TYPE]: 36,
  [EOrderRejectReason.CURRENCY_NOT_DEFINED]: 37
})

export const EOrderStatusInt: Record<EOrderStatus, number> = Object.freeze({
  [EOrderStatus.PENDING]: 1,
  [EOrderStatus.OPEN]: 2,
  [EOrderStatus.FILLED]: 3,
  [EOrderStatus.REJECTED]: 4,
  [EOrderStatus.CANCELLED]: 5
})

export const EQueryMainAccountLeaderboardOrderByInt: Record<EQueryMainAccountLeaderboardOrderBy, number> = Object.freeze({
  [EQueryMainAccountLeaderboardOrderBy.PNL]: 1,
  [EQueryMainAccountLeaderboardOrderBy.TRADING_VOLUME]: 2
})

export const ERewardEpochStatusInt: Record<ERewardEpochStatus, number> = Object.freeze({
  [ERewardEpochStatus.PAST]: 1,
  [ERewardEpochStatus.CURRENT]: 2,
  [ERewardEpochStatus.FUTURE]: 3
})

export const ERewardProgramTypeInt: Record<ERewardProgramType, number> = Object.freeze({
  [ERewardProgramType.ECOSYSTEM]: 1,
  [ERewardProgramType.TRADER]: 2,
  [ERewardProgramType.LP]: 3
})

export const ESourceInt: Record<ESource, number> = Object.freeze({
  [ESource.WEB]: 1,
  [ESource.MOBILE]: 2,
  [ESource.API]: 3,
  [ESource.LIQUIDATOR]: 4
})

export const ESubAccountTradeIntervalInt: Record<ESubAccountTradeInterval, number> = Object.freeze({
  [ESubAccountTradeInterval.SAT_1_MO]: 1,
  [ESubAccountTradeInterval.SAT_1_D]: 2,
  [ESubAccountTradeInterval.SAT_1_H]: 3,
  [ESubAccountTradeInterval.SAT_4_H]: 4
})

export const ETimeInForceInt: Record<ETimeInForce, number> = Object.freeze({
  [ETimeInForce.GOOD_TILL_TIME]: 1,
  [ETimeInForce.ALL_OR_NONE]: 2,
  [ETimeInForce.IMMEDIATE_OR_CANCEL]: 3,
  [ETimeInForce.FILL_OR_KILL]: 4,
  [ETimeInForce.RETAIL_PRICE_IMPROVEMENT]: 5
})

export const ETimeIntervalInt: Record<ETimeInterval, number> = Object.freeze({
  [ETimeInterval.INTERVAL_1_D]: 1,
  [ETimeInterval.INTERVAL_7_D]: 2,
  [ETimeInterval.INTERVAL_30_D]: 3,
  [ETimeInterval.INTERVAL_90_D]: 4,
  [ETimeInterval.INTERVAL_LIFETIME]: 5
})

export const ETransactionTypeInt: Record<ETransactionType, number> = Object.freeze({
  [ETransactionType.UNSPECIFIED_1]: 1,
  [ETransactionType.UNSPECIFIED_2]: 2,
  [ETransactionType.UNSPECIFIED_3]: 3,
  [ETransactionType.CREATE_ACCOUNT]: 4,
  [ETransactionType.CREATE_SUB_ACCOUNT]: 5,
  [ETransactionType.SET_ACCOUNT_MULTI_SIG_THRESHOLD]: 6,
  [ETransactionType.ADD_ACCOUNT_SIGNER]: 7,
  [ETransactionType.REMOVE_ACCOUNT_SIGNER]: 8,
  [ETransactionType.ADD_WITHDRAWAL_ADDRESS]: 9,
  [ETransactionType.REMOVE_WITHDRAWAL_ADDRESS]: 10,
  [ETransactionType.ADD_TRANSFER_ACCOUNT]: 11,
  [ETransactionType.REMOVE_TRANSFER_ACCOUNT]: 12,
  [ETransactionType.SET_SUB_ACCOUNT_MARGIN_TYPE]: 13,
  [ETransactionType.ADD_SUB_ACCOUNT_SIGNER]: 14,
  [ETransactionType.REMOVE_SUB_ACCOUNT_SIGNER]: 15,
  [ETransactionType.ADD_SESSION_KEY]: 16,
  [ETransactionType.REMOVE_SESSION_KEY]: 17,
  [ETransactionType.DEPOSIT]: 18,
  [ETransactionType.WITHDRAWAL]: 19,
  [ETransactionType.TRANSFER]: 20,
  [ETransactionType.MARK_PRICE_TICK]: 21,
  [ETransactionType.SETTLEMENT_PRICE_TICK]: 22,
  [ETransactionType.FUNDING_TICK]: 23,
  [ETransactionType.INTEREST_RATE_TICK]: 24,
  [ETransactionType.SCHEDULE_CONFIG]: 25,
  [ETransactionType.SET_CONFIG]: 26,
  [ETransactionType.TRADE]: 27,
  [ETransactionType.ADD_RECOVERY_ADDRESS]: 28,
  [ETransactionType.REMOVE_RECOVERY_ADDRESS]: 29,
  [ETransactionType.RECOVER_ADDRESS]: 30,
  [ETransactionType.SETTLE_START]: 31,
  [ETransactionType.SETTLE_INSTRUMENTS]: 32,
  [ETransactionType.SETTLE_SOCIALISED_LOSS]: 33,
  [ETransactionType.SETTLE_END]: 34,
  [ETransactionType.SCHEDULE_SIMPLE_CROSS_MAINTENANCE_MARGIN_TIERS]: 35,
  [ETransactionType.SET_SIMPLE_CROSS_MAINTENANCE_MARGIN_TIERS]: 36,
  [ETransactionType.INITIALIZE_CONFIG]: 37,
  [ETransactionType.CREATE_ACCOUNT_WITH_SUB_ACCOUNT]: 38,
  [ETransactionType.VAULT_CREATE]: 39,
  [ETransactionType.VAULT_UPDATE]: 40,
  [ETransactionType.VAULT_DELIST]: 41,
  [ETransactionType.VAULT_CLOSE]: 42,
  [ETransactionType.VAULT_INVEST]: 43,
  [ETransactionType.VAULT_BURN_LP_TOKEN]: 44,
  [ETransactionType.VAULT_REDEEM]: 45,
  [ETransactionType.VAULT_MANAGEMENT_FEE_TICK]: 46,
  [ETransactionType.ADD_CURRENCY]: 47,
  [ETransactionType.SET_DERISK_TO_MAINTENANCE_MARGIN_RATIO]: 48
})

export const ETransferTypeInt: Record<ETransferType, number> = Object.freeze({
  [ETransferType.UNSPECIFIED]: 0,
  [ETransferType.STANDARD]: 1,
  [ETransferType.FAST_ARB_DEPOSIT]: 2,
  [ETransferType.FAST_ARB_WITHDRAWAL]: 3,
  [ETransferType.NON_NATIVE_BRIDGE_DEPOSIT]: 4,
  [ETransferType.NON_NATIVE_BRIDGE_WITHDRAWAL]: 5
})

export const ETriggerByInt: Record<ETriggerBy, number> = Object.freeze({
  [ETriggerBy.UNSPECIFIED]: 0,
  [ETriggerBy.INDEX]: 1,
  [ETriggerBy.LAST]: 2
})

export const ETriggerTypeInt: Record<ETriggerType, number> = Object.freeze({
  [ETriggerType.UNSPECIFIED]: 0,
  [ETriggerType.TAKE_PROFIT]: 1,
  [ETriggerType.STOP_LOSS]: 2
})

export const EVaultTypeInt: Record<EVaultType, number> = Object.freeze({
  [EVaultType.PRIME]: 1,
  [EVaultType.LAUNCH_PAD]: 2
})

export const EVenueInt: Record<EVenue, number> = Object.freeze({
  [EVenue.ORDERBOOK]: 1,
  [EVenue.RFQ]: 2
})
