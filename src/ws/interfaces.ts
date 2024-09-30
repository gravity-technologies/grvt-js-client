import {
  type ECandlestickInterval,
  type ECandlestickType,
  type ECurrency,
  type EKind,
  type ICandlestick,
  type IMiniTicker,
  type IOrder,
  type IOrderState,
  type IOrderbookLevels,
  type IPositions,
  type IPrivateTrade,
  type IPublicTrade,
  type ITicker,
  type ITransfer,
  type IWSCandlestickFeedSelectorV1,
  type IWSMiniTickerFeedSelectorV1,
  type IWSOrderFeedSelectorV1,
  type IWSOrderbookLevelsFeedSelectorV1,
  type IWSPositionsFeedSelectorV1,
  type IWSPrivateTradeFeedSelectorV1,
  type IWSPublicTradesFeedSelectorV1,
  type IWSTickerFeedSelectorV1
} from '../interfaces'

export enum EStream {
  CANDLE = 'candle',
  MINI_DELTA = 'mini.d',
  MINI_SNAP = 'mini.s',
  ORDERBOOK_DELTA = 'book.d',
  ORDERBOOK_SNAP = 'book.s',
  TICKER_DELTA = 'ticker.d',
  TICKER_SNAP = 'ticker.s',
  TRADE = 'trade',

  ORDER = 'order',
  POSITION = 'position',
  FILL = 'fill',
  TRANSFER = 'transfer',
}

// const EStrategyShort = Object.freeze({
//   [EStrategy.FUTURE]: 'Fut',
//   [EStrategy.PERPETUAL]: 'Perp',
//   [EStrategy.CALL]: 'Call',
//   [EStrategy.PUT]: 'Put',
//   [EStrategy.CALL_SPREAD]: 'CSpd',
//   [EStrategy.PUT_SPREAD]: 'PSpd',
//   [EStrategy.FUTURE_SPREAD]: 'FSpd',
//   [EStrategy.RISK_REVERSAL_CALL]: 'RRc',
//   [EStrategy.RISK_REVERSAL_PUT]: 'RRp',
//   [EStrategy.CALL_CALENDAR_SPREAD]: 'CCal',
//   [EStrategy.PUT_CALENDAR_SPREAD]: 'PCal',
//   [EStrategy.STRADDLE]: 'Strd',
//   [EStrategy.STRANGLE]: 'Strg',
//   [EStrategy.CALL_BUTTERFLY]: 'CFly',
//   [EStrategy.PUT_BUTTERFLY]: 'PFly',
//   [EStrategy.IRON_BUTTERFLY]: 'IFly',
//   [EStrategy.CALL_CONDOR]: 'CCon',
//   [EStrategy.PUT_CONDOR]: 'PCon',
//   [EStrategy.IRON_CONDOR]: 'ICon',
//   [EStrategy.CUSTOM]: 'Cstm',
// }) as Readonly<Record<EStrategy, string>>

// export enum EStrategyShort {
//   FUTURE = 'Fut',
//   PERPETUAL = 'Perp',
//   CALL = 'Call',
//   PUT = 'Put',
//   CALL_SPREAD = 'CSpd',
//   PUT_SPREAD = 'PSpd',
//   FUTURE_SPREAD = 'FSpd',
//   RISK_REVERSAL_CALL = 'RRc',
//   RISK_REVERSAL_PUT = 'RRp',
//   CALL_CALENDAR_SPREAD = 'CCal',
//   PUT_CALENDAR_SPREAD = 'PCal',
//   STRADDLE = 'Strd',
//   STRANGLE = 'Strg',
//   CALL_BUTTERFLY = 'CFly',
//   PUT_BUTTERFLY = 'PFly',
//   IRON_BUTTERFLY = 'IFly',
//   CALL_CONDOR = 'CCon',
//   PUT_CONDOR = 'PCon',
//   IRON_CONDOR = 'ICon',
//   CUSTOM = 'Cstm',
// }

export type TMessageHandler<T> = (data: T) => void

export interface IWSCandleRequest {
  stream: `${EStream.CANDLE}`
  params: {
    interval: `${ECandlestickInterval}`
    type: `${ECandlestickType}`
  } & Pick<IWSCandlestickFeedSelectorV1, 'instrument'>
  onData?: TMessageHandler<ICandlestick>
  onError?: (error: Error) => void
}

export interface IWSMiniRequest {
  stream: `${EStream.MINI_DELTA}` | `${EStream.MINI_SNAP}`
  params: IWSMiniTickerFeedSelectorV1
  onData?: TMessageHandler<IMiniTicker>
  onError?: (error: Error) => void
}

export interface IWSBookRequest {
  stream: `${EStream.ORDERBOOK_DELTA}` | `${EStream.ORDERBOOK_SNAP}`
  params: IWSOrderbookLevelsFeedSelectorV1
  onData?: TMessageHandler<IOrderbookLevels>
  onError?: (error: Error) => void
}

export interface IWSTickerRequest {
  stream: `${EStream.TICKER_DELTA}` | `${EStream.TICKER_SNAP}`
  params: IWSTickerFeedSelectorV1
  onData?: TMessageHandler<ITicker>
  onError?: (error: Error) => void
}

export interface IWSTradeRequest {
  stream: `${EStream.TRADE}`
  params: IWSPublicTradesFeedSelectorV1
  onData?: TMessageHandler<IPublicTrade>
  onError?: (error: Error) => void
}

export interface IWSTdgOrderRequest {
  stream: `${EStream.ORDER}`
  params: {
    subAccountId: string
    kind: `${EKind}`
    base: `${ECurrency}`
    quote: `${ECurrency}`
    state_filter: 'all' | 'createOnly' | 'updateOnly' // a / c / u
  } & Omit<IWSOrderFeedSelectorV1, keyof IWSOrderFeedSelectorV1>
  onData?: TMessageHandler<IOrder | IOrderState>
  onError?: (error: Error) => void
}

export interface IWSTdgPositionRequest {
  stream: `${EStream.POSITION}`
  params: {
    subAccountId: string
    kind: `${EKind}`
    base: `${ECurrency}`
    quote: `${ECurrency}`
  } & Omit<IWSPositionsFeedSelectorV1, keyof IWSPositionsFeedSelectorV1>
  onData?: TMessageHandler<IPositions>
  onError?: (error: Error) => void
}

export interface IWSTdgFillRequest {
  stream: `${EStream.FILL}`
  params: {
    subAccountId: string
    kind: `${EKind}`
    base: `${ECurrency}`
    quote: `${ECurrency}`
  } & Omit<IWSPrivateTradeFeedSelectorV1, keyof IWSPrivateTradeFeedSelectorV1>
  onData?: TMessageHandler<IPrivateTrade>
  onError?: (error: Error) => void
}

export interface IWSTdgTransferRequest {
  stream: `${EStream.TRANSFER}`
  params: {
    subAccountId: string
    mainAccountId?: string
  } | {
    subAccountId?: string
    mainAccountId: string
  }
  onData?: TMessageHandler<ITransfer>
  onError?: (error: Error) => void
}

export type TWSRequest =
  | IWSCandleRequest
  | IWSBookRequest
  | IWSMiniRequest
  | IWSTickerRequest
  | IWSTradeRequest
  | IWSTdgOrderRequest
  | IWSTdgPositionRequest
  | IWSTdgFillRequest
  | IWSTdgTransferRequest
