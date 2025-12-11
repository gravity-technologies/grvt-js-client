export enum EPositionMarginType {
  // Isolated Margin Mode: each position is allocated a fixed amount of collateral
  ISOLATED = 'ISOLATED',
  // Cross Margin Mode: uses all available funds in your account as collateral across all cross margin positions
  CROSS = 'CROSS',
}

export const EPositionMarginTypeInt: Record<EPositionMarginType, number> = Object.freeze({
  [EPositionMarginType.ISOLATED]: 1,
  [EPositionMarginType.CROSS]: 2
})
