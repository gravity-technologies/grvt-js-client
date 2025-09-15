export enum EMetricType {
  // All metrics
  ALL = 'ALL',
  // Trading volume metric
  TRADING_VOLUME = 'TRADING_VOLUME',
  // Trading liquidity point metric
  TRADING_LP_POINT = 'TRADING_LP_POINT',
  // Trading open interest metric
  TRADING_OPEN_INTEREST = 'TRADING_OPEN_INTEREST',
  // Trading liquidations metric
  TRADING_LIQUIDATION = 'TRADING_LIQUIDATION',
  // Community referral metric
  COMMUNITY_REFERRAL = 'COMMUNITY_REFERRAL',
  // Total value locked metric
  TVL = 'TVL',
}

export const EMetricTypeInt: Record<EMetricType, number> = Object.freeze({
  [EMetricType.ALL]: 1,
  [EMetricType.TRADING_VOLUME]: 2,
  [EMetricType.TRADING_LP_POINT]: 3,
  [EMetricType.TRADING_OPEN_INTEREST]: 4,
  [EMetricType.TRADING_LIQUIDATION]: 5,
  [EMetricType.COMMUNITY_REFERRAL]: 6,
  [EMetricType.TVL]: 7
})
