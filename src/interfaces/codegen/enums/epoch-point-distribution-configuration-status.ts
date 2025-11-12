export enum EEpochPointDistributionConfigurationStatus {
  // Active status
  ACTIVE = 'ACTIVE',
  // Inactive status
  INACTIVE = 'INACTIVE',
}

export const EEpochPointDistributionConfigurationStatusInt: Record<EEpochPointDistributionConfigurationStatus, number> = Object.freeze({
  [EEpochPointDistributionConfigurationStatus.ACTIVE]: 1,
  [EEpochPointDistributionConfigurationStatus.INACTIVE]: 2
})
