export enum ERewardEpochStatus {
  // Past
  PAST = 'PAST',
  // Current
  CURRENT = 'CURRENT',
  // Future
  FUTURE = 'FUTURE',
}

export const ERewardEpochStatusInt: Record<ERewardEpochStatus, number> = Object.freeze({
  [ERewardEpochStatus.PAST]: 1,
  [ERewardEpochStatus.CURRENT]: 2,
  [ERewardEpochStatus.FUTURE]: 3
})
