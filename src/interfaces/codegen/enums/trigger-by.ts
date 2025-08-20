// Defines the price type that activates a Take Profit (TP) or Stop Loss (SL) order.
//
// Trigger orders are executed when the selected price type reaches the specified trigger price.Different price types ensure flexibility in executing strategies based on market conditions.
//
//
export enum ETriggerBy {
  // no trigger condition
  UNSPECIFIED = 'UNSPECIFIED',
  // INDEX - Order is activated when the index price reaches the trigger price
  INDEX = 'INDEX',
  // LAST - Order is activated when the last trade price reaches the trigger price
  LAST = 'LAST',
  // MID - Order is activated when the mid price reaches the trigger price
  MID = 'MID',
  // MARK - Order is activated when the mark price reaches the trigger price
  MARK = 'MARK',
}

export const ETriggerByInt: Record<ETriggerBy, number> = Object.freeze({
  [ETriggerBy.UNSPECIFIED]: 0,
  [ETriggerBy.INDEX]: 1,
  [ETriggerBy.LAST]: 2,
  [ETriggerBy.MID]: 3,
  [ETriggerBy.MARK]: 4
})
