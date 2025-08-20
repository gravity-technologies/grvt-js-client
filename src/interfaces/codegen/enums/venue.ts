// The list of Trading Venues that are supported on the GRVT exchange
export enum EVenue {
  // the trade is cleared on the orderbook venue
  ORDERBOOK = 'ORDERBOOK',
  // the trade is cleared on the RFQ venue
  RFQ = 'RFQ',
}

export const EVenueInt: Record<EVenue, number> = Object.freeze({
  [EVenue.ORDERBOOK]: 1,
  [EVenue.RFQ]: 2
})
