import {
  ECandlestickInterval,
  ECandlestickType,
  ECurrency,
  EInstrumentSettlementPeriod,
  EKind,
  EMarginType,
  EOrderRejectReason,
  EOrderStateFilter,
  EOrderStatus,
  ERfqRejectReason,
  ERfqStatus,
  EStrategy,
  ESubAccountTradeInterval,
  ETimeInForce,
  EVenue
} from './data.interface'

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
  [EOrderRejectReason.CLIENT_CANCEL]: 1,
  [EOrderRejectReason.CLIENT_BULK_CANCEL]: 2,
  [EOrderRejectReason.CLIENT_SESSION_END]: 3,
  [EOrderRejectReason.INSTRUMENT_DEACTIVATED]: 4,
  [EOrderRejectReason.MM_PROTECTION]: 5,
  [EOrderRejectReason.EXPIRED]: 6,
  [EOrderRejectReason.BELOW_MARGIN]: 7,
  [EOrderRejectReason.LIQUIDATION]: 8,
  [EOrderRejectReason.SYSTEM_FAILOVER]: 9,
  [EOrderRejectReason.CONFLICTING_SIGNATURE_HASH]: 10,
  [EOrderRejectReason.OVERLAPPING_CLIENT_ORDER_ID]: 11,
  [EOrderRejectReason.RFQ_CANCELLED]: 12,
  [EOrderRejectReason.AXE_CANCELLED]: 13,
  [EOrderRejectReason.INVALID_ORDER]: 14,
  [EOrderRejectReason.UNAUTHORISED]: 15,
  [EOrderRejectReason.FAIL_POST_ONLY]: 16,
  [EOrderRejectReason.FAIL_REDUCE_ONLY]: 17,
  [EOrderRejectReason.INVALID_TRIGGER_PRICE]: 18,
  [EOrderRejectReason.RFQ_EXPIRED]: 19,
  [EOrderRejectReason.AXE_EXPIRED]: 20,
  [EOrderRejectReason.FAIL_FOK]: 21,
  [EOrderRejectReason.FAIL_AON]: 22,
  [EOrderRejectReason.SELF_MATCHED_SUBACCOUNT]: 23,
  [EOrderRejectReason.SIGNATURE_SIZE_EXCEEDED]: 24,
  [EOrderRejectReason.SUB_ACCOUNT_NOT_FOUND]: 25,
  [EOrderRejectReason.BAD_SIGNATURE]: 26,
  [EOrderRejectReason.SIZE_NON_ZERO_ON_UNMACHED_LEG]: 27,
  [EOrderRejectReason.TRADE_SAME_SIDE]: 28,
  [EOrderRejectReason.TRADE_PRICE_DOES_NOT_CROSS]: 29,
  [EOrderRejectReason.NO_LEG]: 30,
  [EOrderRejectReason.MARKET_ORDER_ON_MAKER_SIDE]: 31,
  [EOrderRejectReason.TIME_IN_FORCE_REQUIRE_TAKER]: 32,
  [EOrderRejectReason.ASSET_QUOTE_NOT_MATCHING]: 33,
  [EOrderRejectReason.MISSING_MARK_PRICE]: 34,
  [EOrderRejectReason.MISSING_INDEX_PRICE]: 35,
  [EOrderRejectReason.SESSION_KEY_EXPIRED]: 36,
  [EOrderRejectReason.DUPLICATE_LEG_ASSET]: 37,
  [EOrderRejectReason.CHARGED_FEE_ABOVE_SIGNED_AMOUNT]: 38,
  [EOrderRejectReason.CHARGED_FEE_BELOW_MIN]: 39,
  [EOrderRejectReason.NO_TRADE_PERMISSION]: 40,
  [EOrderRejectReason.NOT_MATCHED_AGAINS_TAKER_LEGS]: 41,
  [EOrderRejectReason.ORDER_NOT_FULLY_MATCHED]: 42,
  [EOrderRejectReason.ASSET_EXPIRED]: 43,
  [EOrderRejectReason.NUM_LEGS_SIZE_MATCHED_MISMATCH]: 44,
  [EOrderRejectReason.INVALID_ASSET]: 45
})

export const EOrderStateFilterInt: Record<EOrderStateFilter, number> = Object.freeze({
  [EOrderStateFilter.C]: 1,
  [EOrderStateFilter.U]: 2,
  [EOrderStateFilter.A]: 3
})

export const EOrderStatusInt: Record<EOrderStatus, number> = Object.freeze({
  [EOrderStatus.PENDING]: 1,
  [EOrderStatus.OPEN]: 2,
  [EOrderStatus.FILLED]: 3,
  [EOrderStatus.REJECTED]: 4,
  [EOrderStatus.CANCELLED]: 5
})

export const ERfqRejectReasonInt: Record<ERfqRejectReason, number> = Object.freeze({
  [ERfqRejectReason.CLIENT_CANCEL]: 1,
  [ERfqRejectReason.CLIENT_BULK_CANCEL]: 2,
  [ERfqRejectReason.CLIENT_SESSION_END]: 3,
  [ERfqRejectReason.INSTRUMENT_DEACTIVATED]: 4,
  [ERfqRejectReason.MM_PROTECTION]: 5,
  [ERfqRejectReason.EXPIRED]: 6,
  [ERfqRejectReason.BELOW_MARGIN]: 7,
  [ERfqRejectReason.LIQUIDATION]: 8,
  [ERfqRejectReason.SYSTEM_FAILOVER]: 9,
  [ERfqRejectReason.INVALID_RFQ]: 10,
  [ERfqRejectReason.UNAUTHORISED]: 11
})

export const ERfqStatusInt: Record<ERfqStatus, number> = Object.freeze({
  [ERfqStatus.OPEN]: 1,
  [ERfqStatus.REJECTED]: 2,
  [ERfqStatus.CANCELLED]: 3
})

export const EStrategyInt: Record<EStrategy, number> = Object.freeze({
  [EStrategy.FUTURE]: 1,
  [EStrategy.PERPETUAL]: 2,
  [EStrategy.CALL]: 3,
  [EStrategy.PUT]: 4,
  [EStrategy.CALL_SPREAD]: 5,
  [EStrategy.PUT_SPREAD]: 6,
  [EStrategy.FUTURE_SPREAD]: 7,
  [EStrategy.RISK_REVERSAL_CALL]: 8,
  [EStrategy.RISK_REVERSAL_PUT]: 9,
  [EStrategy.CALL_CALENDAR_SPREAD]: 10,
  [EStrategy.PUT_CALENDAR_SPREAD]: 11,
  [EStrategy.STRADDLE]: 12,
  [EStrategy.STRANGLE]: 13,
  [EStrategy.CALL_BUTTERFLY]: 14,
  [EStrategy.PUT_BUTTERFLY]: 15,
  [EStrategy.IRON_BUTTERFLY]: 16,
  [EStrategy.CALL_CONDOR]: 17,
  [EStrategy.PUT_CONDOR]: 18,
  [EStrategy.IRON_CONDOR]: 19,
  [EStrategy.CUSTOM]: 20
})

export const ESubAccountTradeIntervalInt: Record<ESubAccountTradeInterval, number> = Object.freeze({
  [ESubAccountTradeInterval.SAT_1_MO]: 1,
  [ESubAccountTradeInterval.SAT_LIFETIME]: 2
})

export const ETimeInForceInt: Record<ETimeInForce, number> = Object.freeze({
  [ETimeInForce.GOOD_TILL_TIME]: 1,
  [ETimeInForce.ALL_OR_NONE]: 2,
  [ETimeInForce.IMMEDIATE_OR_CANCEL]: 3,
  [ETimeInForce.FILL_OR_KILL]: 4
})

export const EVenueInt: Record<EVenue, number> = Object.freeze({
  [EVenue.ORDERBOOK]: 1
})
