export enum EQueryMainAccountLeaderboardOrderBy {
  // Sort by realized PnL
  PNL = 'PNL',
  // Sort by trading volume
  TRADING_VOLUME = 'TRADING_VOLUME',
}

export const EQueryMainAccountLeaderboardOrderByInt: Record<EQueryMainAccountLeaderboardOrderBy, number> = Object.freeze({
  [EQueryMainAccountLeaderboardOrderBy.PNL]: 1,
  [EQueryMainAccountLeaderboardOrderBy.TRADING_VOLUME]: 2
})
