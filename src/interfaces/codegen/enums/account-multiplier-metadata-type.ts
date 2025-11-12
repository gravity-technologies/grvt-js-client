export enum EAccountMultiplierMetadataType {
  // ambassador type
  AMBASSADOR = 'AMBASSADOR',
  // referred by ambassador type
  REFERRED_BY_AMBASSADOR = 'REFERRED_BY_AMBASSADOR',
}

export const EAccountMultiplierMetadataTypeInt: Record<EAccountMultiplierMetadataType, number> = Object.freeze({
  [EAccountMultiplierMetadataType.AMBASSADOR]: 1,
  [EAccountMultiplierMetadataType.REFERRED_BY_AMBASSADOR]: 2
})
