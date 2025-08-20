// |                       | Must Fill All | Can Fill Partial |
// | -                     | -             | -                |
// | Must Fill Immediately | FOK           | IOC              |
// | Can Fill Till Time    | AON           | GTC              |
//
export enum ETimeInForce {
  // GTT - Remains open until it is cancelled, or expired
  GOOD_TILL_TIME = 'GOOD_TILL_TIME',
  // AON - Either fill the whole order or none of it (Block Trades Only)
  ALL_OR_NONE = 'ALL_OR_NONE',
  // IOC - Fill the order as much as possible, when hitting the orderbook. Then cancel it
  IMMEDIATE_OR_CANCEL = 'IMMEDIATE_OR_CANCEL',
  // FOK - Both AoN and IoC. Either fill the full order when hitting the orderbook, or cancel it
  FILL_OR_KILL = 'FILL_OR_KILL',
  // RPI - A GTT + PostOnly maker order, that can only be taken by non-algorithmic UI users.
  RETAIL_PRICE_IMPROVEMENT = 'RETAIL_PRICE_IMPROVEMENT',
}

export const ETimeInForceInt: Record<ETimeInForce, number> = Object.freeze({
  [ETimeInForce.GOOD_TILL_TIME]: 1,
  [ETimeInForce.ALL_OR_NONE]: 2,
  [ETimeInForce.IMMEDIATE_OR_CANCEL]: 3,
  [ETimeInForce.FILL_OR_KILL]: 4,
  [ETimeInForce.RETAIL_PRICE_IMPROVEMENT]: 5
})
