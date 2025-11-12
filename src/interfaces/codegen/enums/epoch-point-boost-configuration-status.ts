export enum EEpochPointBoostConfigurationStatus {
  // Active status
  ACTIVE = 'ACTIVE',
  // Inactive status
  INACTIVE = 'INACTIVE',
}

export const EEpochPointBoostConfigurationStatusInt: Record<EEpochPointBoostConfigurationStatus, number> = Object.freeze({
  [EEpochPointBoostConfigurationStatus.ACTIVE]: 1,
  [EEpochPointBoostConfigurationStatus.INACTIVE]: 2
})
