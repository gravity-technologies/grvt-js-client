export enum EAccountType {
  // All account types
  ALL = 'ALL',
  // Retail account type
  RETAIL = 'RETAIL',
  // Institutional account type
  INSTITUTIONAL = 'INSTITUTIONAL',
}

export const EAccountTypeInt: Record<EAccountType, number> = Object.freeze({
  [EAccountType.ALL]: 1,
  [EAccountType.RETAIL]: 2,
  [EAccountType.INSTITUTIONAL]: 3
})
