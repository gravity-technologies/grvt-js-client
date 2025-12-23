// Time interval can be used as a filter in metric/portfolio management APIs
export enum ETimeInterval {
  // 1 day
  INTERVAL_1_D = 'INTERVAL_1_D',
  // 7 days
  INTERVAL_7_D = 'INTERVAL_7_D',
  // 30 days
  INTERVAL_30_D = 'INTERVAL_30_D',
  // 90 days
  INTERVAL_90_D = 'INTERVAL_90_D',
  // Lifetime
  INTERVAL_LIFETIME = 'INTERVAL_LIFETIME',
  // 14 days
  INTERVAL_14_D = 'INTERVAL_14_D',
}

export const ETimeIntervalInt: Record<ETimeInterval, number> = Object.freeze({
  [ETimeInterval.INTERVAL_1_D]: 1,
  [ETimeInterval.INTERVAL_7_D]: 2,
  [ETimeInterval.INTERVAL_30_D]: 3,
  [ETimeInterval.INTERVAL_90_D]: 4,
  [ETimeInterval.INTERVAL_LIFETIME]: 5,
  [ETimeInterval.INTERVAL_14_D]: 6
})
