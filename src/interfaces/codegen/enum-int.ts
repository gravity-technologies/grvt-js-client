import {
  EBridgeType,
  ECandlestickInterval,
  ECandlestickType,
  ECurrency,
  EInstrumentSettlementPeriod,
  EKind,
  EMarginType,
  EOrderRejectReason,
  EOrderStatus,
  ESubAccountTradeInterval,
  ETimeInForce,
  EVenue
} from './data.interface'

export const EBridgeTypeInt: Record<EBridgeType, number> = Object.freeze({
  [EBridgeType.XY]: 1
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

export const ECurrencyInt: Record<ECurrency, number> = Object.freeze({
  [ECurrency.USD]: 1,
  [ECurrency.USDC]: 2,
  [ECurrency.USDT]: 3,
  [ECurrency.ETH]: 4,
  [ECurrency.BTC]: 5
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
  [EOrderRejectReason.MARKET_ORDER_WITH_LIMIT_PRICE]: 28
})

export const EOrderStatusInt: Record<EOrderStatus, number> = Object.freeze({
  [EOrderStatus.PENDING]: 1,
  [EOrderStatus.OPEN]: 2,
  [EOrderStatus.FILLED]: 3,
  [EOrderStatus.REJECTED]: 4,
  [EOrderStatus.CANCELLED]: 5
})

export const ESubAccountTradeIntervalInt: Record<ESubAccountTradeInterval, number> = Object.freeze({
  [ESubAccountTradeInterval.SAT_1_MO]: 1,
  [ESubAccountTradeInterval.SAT_1_D]: 2
})

export const ETimeInForceInt: Record<ETimeInForce, number> = Object.freeze({
  [ETimeInForce.GOOD_TILL_TIME]: 1,
  [ETimeInForce.ALL_OR_NONE]: 2,
  [ETimeInForce.IMMEDIATE_OR_CANCEL]: 3,
  [ETimeInForce.FILL_OR_KILL]: 4
})

export const EVenueInt: Record<EVenue, number> = Object.freeze({
  [EVenue.ORDERBOOK]: 1,
  [EVenue.RFQ]: 2
})
