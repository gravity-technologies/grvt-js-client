import {
  ECurrency,
  EInstrumentSettlementPeriod,
  EKind,
  EMarginType,
  EOrderRejectReason,
  EOrderStatus,
  ERfqRejectReason,
  ERfqStatus,
  EStrategy,
  ETimeInForce,
  ETriggerCondition,
  EVenue
} from './data.interface'

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
  [EOrderRejectReason.FAIL_AON]: 22
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

export const ETimeInForceInt: Record<ETimeInForce, number> = Object.freeze({
  [ETimeInForce.GOOD_TILL_TIME]: 1,
  [ETimeInForce.ALL_OR_NONE]: 2,
  [ETimeInForce.IMMEDIATE_OR_CANCEL]: 3,
  [ETimeInForce.FILL_OR_KILL]: 4
})

export const ETriggerConditionInt: Record<ETriggerCondition, number> = Object.freeze({
  [ETriggerCondition.INDEX]: 1,
  [ETriggerCondition.LAST]: 2,
  [ETriggerCondition.MARKET]: 3,
  [ETriggerCondition.MARK]: 4,
  [ETriggerCondition.TRAILING]: 5,
  [ETriggerCondition.TRAILING_PERCENT]: 6
})

export const EVenueInt: Record<EVenue, number> = Object.freeze({
  [EVenue.ORDERBOOK]: 1,
  [EVenue.RFQ]: 2,
  [EVenue.AXE]: 3
})
