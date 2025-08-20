// Defines the source of the order or trade, such as a UI, API, or a bot.
// This is used to track the source of the order, and is not signed by the client
export enum ESource {
  // The order/trade was created by a web client
  WEB = 'WEB',
  // The order/trade was created by a mobile client
  MOBILE = 'MOBILE',
  // The order/trade was created by an API client
  API = 'API',
  // The order/trade was created by the liquidator service
  LIQUIDATOR = 'LIQUIDATOR',
}

export const ESourceInt: Record<ESource, number> = Object.freeze({
  [ESource.WEB]: 1,
  [ESource.MOBILE]: 2,
  [ESource.API]: 3,
  [ESource.LIQUIDATOR]: 4
})
