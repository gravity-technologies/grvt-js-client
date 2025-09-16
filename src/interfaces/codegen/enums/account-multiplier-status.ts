export enum EAccountMultiplierStatus {
  // Active status
  ACTIVE = 'ACTIVE',
  // Inactive status
  INACTIVE = 'INACTIVE',
}

export const EAccountMultiplierStatusInt: Record<EAccountMultiplierStatus, number> = Object.freeze({
  [EAccountMultiplierStatus.ACTIVE]: 1,
  [EAccountMultiplierStatus.INACTIVE]: 2
})
