export enum EPortfolioCurrency {
  // the USD portfolio currency, defaults to USDT
  USD = 'USD',
  // the USDT portfolio currency
  USDT = 'USDT',
}

export const EPortfolioCurrencyInt: Record<EPortfolioCurrency, number> = Object.freeze({
  [EPortfolioCurrency.USD]: 1,
  [EPortfolioCurrency.USDT]: 2
})
