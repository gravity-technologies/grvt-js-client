export enum ECandlestickType {
  // Tracks traded prices
  TRADE = 'TRADE',
  // Tracks mark prices
  MARK = 'MARK',
  // Tracks index prices
  INDEX = 'INDEX',
  // Tracks book mid prices
  MID = 'MID',
}

export const ECandlestickTypeInt: Record<ECandlestickType, number> = Object.freeze({
  [ECandlestickType.TRADE]: 1,
  [ECandlestickType.MARK]: 2,
  [ECandlestickType.INDEX]: 3,
  [ECandlestickType.MID]: 4
})
