// Defines the type of trigger order used in trading, such as Take Profit or Stop Loss.
//
// Trigger orders allow execution based on pre-defined price conditions rather than immediate market conditions.
//
//
export enum ETriggerType {
  // Not a trigger order. The order executes normally without any trigger conditions.
  UNSPECIFIED = 'UNSPECIFIED',
  // Take Profit Order - Executes when the price reaches a specified level to secure profits.
  TAKE_PROFIT = 'TAKE_PROFIT',
  // Stop Loss Order - Executes when the price reaches a specified level to limit losses.
  STOP_LOSS = 'STOP_LOSS',
}

export const ETriggerTypeInt: Record<ETriggerType, number> = Object.freeze({
  [ETriggerType.UNSPECIFIED]: 0,
  [ETriggerType.TAKE_PROFIT]: 1,
  [ETriggerType.STOP_LOSS]: 2
})
