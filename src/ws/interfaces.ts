import {
  type ECandlestickInterval,
  type ECandlestickType,
  type ICandlestick,
  type IDeposit,
  type IFill,
  type IMiniTicker,
  type IOrder,
  type IOrderState,
  type IOrderbookLevels,
  type IPositions,
  type ITicker,
  type ITrade,
  type ITransfer,
  type IWSCandlestickFeedSelectorV1,
  type IWSDepositFeedSelectorV1,
  type IWSFillFeedSelectorV1,
  type IWSMiniTickerFeedSelectorV1,
  type IWSOrderFeedSelectorV1,
  type IWSOrderStateFeedSelectorV1,
  type IWSOrderbookLevelsFeedSelectorV1,
  type IWSPositionsFeedSelectorV1,
  type IWSTickerFeedSelectorV1,
  type IWSTradeFeedSelectorV1,
  type IWSTransferFeedSelectorV1,
  type IWSWithdrawalFeedSelectorV1,
  type IWithdrawal
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
  STATE = 'state',
  POSITION = 'position',
  FILL = 'fill',
  DEPOSIT = 'deposit',
  TRANSFER = 'transfer',
  WITHDRAWAL = 'withdrawal',
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
  params: IWSTradeFeedSelectorV1
  onData?: TMessageHandler<ITrade>
  onError?: (error: Error) => void
}

export interface IWSTdgOrderRequest {
  stream: `${EStream.ORDER}`
  params: {
    sub_account_id: string
  } & Pick<IWSOrderFeedSelectorV1, 'instrument'>
  onData?: TMessageHandler<IOrder>
  onError?: (error: Error) => void
}

export interface IWSTdgOrderStateRequest {
  stream: `${EStream.STATE}`
  params: {
    sub_account_id: string
  } & Pick<IWSOrderStateFeedSelectorV1, 'instrument'>
  onData?: TMessageHandler<IOrderState>
  onError?: (error: Error) => void
}

export interface IWSTdgPositionRequest {
  stream: `${EStream.POSITION}`
  params: {
    sub_account_id: string
  } & Pick<IWSPositionsFeedSelectorV1, 'instrument'>
  onData?: TMessageHandler<IPositions>
  onError?: (error: Error) => void
}

export interface IWSTdgFillRequest {
  stream: `${EStream.FILL}`
  params: {
    sub_account_id: string
  } & Pick<IWSFillFeedSelectorV1, 'instrument'>
  onData?: TMessageHandler<IFill>
  onError?: (error: Error) => void
}

export interface IWSTdgDepositRequest {
  stream: `${EStream.DEPOSIT}`
  params: {
    main_account_id: string
  } & Omit<IWSDepositFeedSelectorV1, keyof IWSDepositFeedSelectorV1>
  onData?: TMessageHandler<IDeposit>
  onError?: (error: Error) => void
}
export interface IWSTdgTransferRequest {
  stream: `${EStream.TRANSFER}`
  params: ({
    main_account_id: string
    sub_account_id?: string
  } | {
    main_account_id?: string
    sub_account_id: string
  }) & Omit<IWSTransferFeedSelectorV1, keyof IWSTransferFeedSelectorV1>
  onData?: TMessageHandler<ITransfer>
  onError?: (error: Error) => void
}
export interface IWSTdgWithDrawalRequest {
  stream: `${EStream.WITHDRAWAL}`
  params: {
    main_account_id: string
  } & Omit<IWSWithdrawalFeedSelectorV1, keyof IWSWithdrawalFeedSelectorV1>
  onData?: TMessageHandler<IWithdrawal>
  onError?: (error: Error) => void
}

export type TWSRequest =
  | IWSCandleRequest
  | IWSBookRequest
  | IWSMiniRequest
  | IWSTickerRequest
  | IWSTradeRequest
  | IWSTdgOrderRequest
  | IWSTdgOrderStateRequest
  | IWSTdgPositionRequest
  | IWSTdgFillRequest
  | IWSTdgDepositRequest
  | IWSTdgTransferRequest
  | IWSTdgWithDrawalRequest
