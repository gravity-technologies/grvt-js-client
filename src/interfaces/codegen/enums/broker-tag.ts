// BrokerTag is a tag for the broker that the order is sent from.
export enum EBrokerTag {
  UNSPECIFIED = 'UNSPECIFIED',
  // CoinRoutes
  COIN_ROUTES = 'COIN_ROUTES',
  // Alertatron
  ALERTATRON = 'ALERTATRON',
  // Origami
  ORIGAMI = 'ORIGAMI',
}

export const EBrokerTagInt: Record<EBrokerTag, number> = Object.freeze({
  [EBrokerTag.UNSPECIFIED]: 0,
  [EBrokerTag.COIN_ROUTES]: 1,
  [EBrokerTag.ALERTATRON]: 2,
  [EBrokerTag.ORIGAMI]: 3
})
