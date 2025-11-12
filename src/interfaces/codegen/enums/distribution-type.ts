export enum EDistributionType {
  // Adhoc distribution
  ADHOC = 'ADHOC',
  // Raffle task distribution
  RAFFLE_TASK = 'RAFFLE_TASK',
  // KYC verification distribution
  KYC_VERIFICATION = 'KYC_VERIFICATION',
  // Secure key setup distribution
  SECURE_KEY_SETUP = 'SECURE_KEY_SETUP',
  // First deposit distribution
  FIRST_DEPOSIT = 'FIRST_DEPOSIT',
  // First trade distribution
  FIRST_TRADE = 'FIRST_TRADE',
}

export const EDistributionTypeInt: Record<EDistributionType, number> = Object.freeze({
  [EDistributionType.ADHOC]: 1,
  [EDistributionType.RAFFLE_TASK]: 2,
  [EDistributionType.KYC_VERIFICATION]: 3,
  [EDistributionType.SECURE_KEY_SETUP]: 4,
  [EDistributionType.FIRST_DEPOSIT]: 5,
  [EDistributionType.FIRST_TRADE]: 6
})
