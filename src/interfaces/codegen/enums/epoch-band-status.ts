export enum EEpochBandStatus {
  // Active status
  ACTIVE = 'ACTIVE',
  // Inactive status
  INACTIVE = 'INACTIVE',
}

export const EEpochBandStatusInt: Record<EEpochBandStatus, number> = Object.freeze({
  [EEpochBandStatus.ACTIVE]: 1,
  [EEpochBandStatus.INACTIVE]: 2
})
