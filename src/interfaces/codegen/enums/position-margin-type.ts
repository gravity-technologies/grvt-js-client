export enum EPositionMarginType {
  // Cross Margin Mode: uses all available funds in your account as collateral across all cross margin positions
  CROSS = 'CROSS',
}

export const EPositionMarginTypeInt: Record<EPositionMarginType, number> = Object.freeze({
  [EPositionMarginType.CROSS]: 2
})
