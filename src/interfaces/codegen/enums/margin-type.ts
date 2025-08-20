export enum EMarginType {
  // Simple Cross Margin Mode: all assets have a predictable margin impact, the whole subaccount shares a single margin
  SIMPLE_CROSS_MARGIN = 'SIMPLE_CROSS_MARGIN',
  // Portfolio Cross Margin Mode: asset margin impact is analysed on portfolio level, the whole subaccount shares a single margin
  PORTFOLIO_CROSS_MARGIN = 'PORTFOLIO_CROSS_MARGIN',
}

export const EMarginTypeInt: Record<EMarginType, number> = Object.freeze({
  [EMarginType.SIMPLE_CROSS_MARGIN]: 2,
  [EMarginType.PORTFOLIO_CROSS_MARGIN]: 3
})
