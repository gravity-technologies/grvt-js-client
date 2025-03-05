import {
  EBridgeType,
  EBrokerTag,
  ECancelStatus,
  ECandlestickInterval,
  ECandlestickType,
  ECurrency,
  EEpochBadgeType,
  EInstrumentSettlementPeriod,
  EKind,
  EMarginType,
  EOrderRejectReason,
  EOrderStatus,
  ERewardEpochStatus,
  ERewardProgramType,
  ESubAccountTradeInterval,
  ETimeInForce,
  ETransferType,
  ETriggerBy,
  ETriggerType,
  EVenue
} from './data.interface'

export const EBridgeTypeInt: Record<EBridgeType, number> = Object.freeze({
  [EBridgeType.XY]: 1
})

export const EBrokerTagInt: Record<EBrokerTag, number> = Object.freeze({
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

export const ECurrencyInt: Record<ECurrency, number> = Object.freeze({
  [ECurrency.USD]: 1,
  [ECurrency.USDC]: 2,
  [ECurrency.USDT]: 3,
  [ECurrency.ETH]: 4,
  [ECurrency.BTC]: 5,
  [ECurrency.SOL]: 6,
  [ECurrency.ARB]: 7,
  [ECurrency.BNB]: 8,
  [ECurrency.ZK]: 9,
  [ECurrency.POL]: 10,
  [ECurrency.OP]: 11,
  [ECurrency.ATOM]: 12,
  [ECurrency.KPEPE]: 13,
  [ECurrency.TON]: 14,
  [ECurrency.XRP]: 15,
  [ECurrency.XLM]: 16,
  [ECurrency.WLD]: 17,
  [ECurrency.WIF]: 18,
  [ECurrency.VIRTUAL]: 19,
  [ECurrency.TRUMP]: 20,
  [ECurrency.SUI]: 21,
  [ECurrency.KSHIB]: 22,
  [ECurrency.POPCAT]: 23,
  [ECurrency.PENGU]: 24,
  [ECurrency.LINK]: 25,
  [ECurrency.KBONK]: 26,
  [ECurrency.JUP]: 27,
  [ECurrency.FARTCOIN]: 28,
  [ECurrency.ENA]: 29,
  [ECurrency.DOGE]: 30,
  [ECurrency.AIXBT]: 31,
  [ECurrency.AI16Z]: 32,
  [ECurrency.ADA]: 33,
  [ECurrency.AAVE]: 34,
  [ECurrency.BERA]: 35,
  [ECurrency.VINE]: 36,
  [ECurrency.PENDLE]: 37,
  [ECurrency.UXLINK]: 38,
  [ECurrency.KAITO]: 39
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
  [EOrderRejectReason.OCO_COUNTER_PART_TRIGGERED]: 30
})

export const EOrderStatusInt: Record<EOrderStatus, number> = Object.freeze({
  [EOrderStatus.PENDING]: 1,
  [EOrderStatus.OPEN]: 2,
  [EOrderStatus.FILLED]: 3,
  [EOrderStatus.REJECTED]: 4,
  [EOrderStatus.CANCELLED]: 5
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

export const ESubAccountTradeIntervalInt: Record<ESubAccountTradeInterval, number> = Object.freeze({
  [ESubAccountTradeInterval.SAT_1_MO]: 1,
  [ESubAccountTradeInterval.SAT_1_D]: 2,
  [ESubAccountTradeInterval.SAT_1_H]: 3
})

export const ETimeInForceInt: Record<ETimeInForce, number> = Object.freeze({
  [ETimeInForce.GOOD_TILL_TIME]: 1,
  [ETimeInForce.ALL_OR_NONE]: 2,
  [ETimeInForce.IMMEDIATE_OR_CANCEL]: 3,
  [ETimeInForce.FILL_OR_KILL]: 4
})

export const ETransferTypeInt: Record<ETransferType, number> = Object.freeze({
  [ETransferType.STANDARD]: 1,
  [ETransferType.FAST_ARB_DEPOSIT]: 2,
  [ETransferType.FAST_ARB_WITHDRAWAL]: 3
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

export const EVenueInt: Record<EVenue, number> = Object.freeze({
  [EVenue.ORDERBOOK]: 1,
  [EVenue.RFQ]: 2
})
