export enum EOrderRejectReason {
  // order is not cancelled or rejected
  UNSPECIFIED = 'UNSPECIFIED',
  // client called a Cancel API
  CLIENT_CANCEL = 'CLIENT_CANCEL',
  // client called a Bulk Cancel API
  CLIENT_BULK_CANCEL = 'CLIENT_BULK_CANCEL',
  // client called a Session Cancel API, or set the WebSocket connection to 'cancelOrdersOnTerminate'
  CLIENT_SESSION_END = 'CLIENT_SESSION_END',
  // the market order was cancelled after no/partial fill. Lower precedence than other TimeInForce cancel reasons
  MARKET_CANCEL = 'MARKET_CANCEL',
  // the IOC order was cancelled after no/partial fill
  IOC_CANCEL = 'IOC_CANCEL',
  // the AON order was cancelled as it could not be fully matched
  AON_CANCEL = 'AON_CANCEL',
  // the FOK order was cancelled as it could not be fully matched
  FOK_CANCEL = 'FOK_CANCEL',
  // the order was cancelled as it has expired
  EXPIRED = 'EXPIRED',
  // the post-only order could not be posted into the orderbook
  FAIL_POST_ONLY = 'FAIL_POST_ONLY',
  // the reduce-only order would have caused position size to increase
  FAIL_REDUCE_ONLY = 'FAIL_REDUCE_ONLY',
  // the order was cancelled due to market maker protection trigger
  MM_PROTECTION = 'MM_PROTECTION',
  // the order was cancelled due to self-trade protection trigger
  SELF_TRADE_PROTECTION = 'SELF_TRADE_PROTECTION',
  // the order matched with another order from the same sub account
  SELF_MATCHED_SUBACCOUNT = 'SELF_MATCHED_SUBACCOUNT',
  // an active order on your sub account shares the same clientOrderId
  OVERLAPPING_CLIENT_ORDER_ID = 'OVERLAPPING_CLIENT_ORDER_ID',
  // the order will bring the sub account below initial margin requirement
  BELOW_MARGIN = 'BELOW_MARGIN',
  // the sub account is liquidated (and all open orders are cancelled by Gravity)
  LIQUIDATION = 'LIQUIDATION',
  // instrument is invalid or not found on Gravity
  INSTRUMENT_INVALID = 'INSTRUMENT_INVALID',
  // instrument is no longer tradable on Gravity. (typically due to a market halt, or instrument expiry)
  INSTRUMENT_DEACTIVATED = 'INSTRUMENT_DEACTIVATED',
  // system failover resulting in loss of order state
  SYSTEM_FAILOVER = 'SYSTEM_FAILOVER',
  // the credentials used (userSession/apiKeySession/walletSignature) is not authorised to perform the action
  UNAUTHORISED = 'UNAUTHORISED',
  // the session key used to sign the order expired
  SESSION_KEY_EXPIRED = 'SESSION_KEY_EXPIRED',
  // the subaccount does not exist
  SUB_ACCOUNT_NOT_FOUND = 'SUB_ACCOUNT_NOT_FOUND',
  // the signature used to sign the order has no trade permission
  NO_TRADE_PERMISSION = 'NO_TRADE_PERMISSION',
  // the order payload does not contain a supported TimeInForce value
  UNSUPPORTED_TIME_IN_FORCE = 'UNSUPPORTED_TIME_IN_FORCE',
  // the order has multiple legs, but multiple legs are not supported by this venue
  MULTI_LEGGED_ORDER = 'MULTI_LEGGED_ORDER',
  // the order would have caused the subaccount to exceed the max position size
  EXCEED_MAX_POSITION_SIZE = 'EXCEED_MAX_POSITION_SIZE',
  // the signature supplied is more than 30 days in the future
  EXCEED_MAX_SIGNATURE_EXPIRATION = 'EXCEED_MAX_SIGNATURE_EXPIRATION',
  // the market order has a limit price set
  MARKET_ORDER_WITH_LIMIT_PRICE = 'MARKET_ORDER_WITH_LIMIT_PRICE',
  // client cancel on disconnect triggered
  CLIENT_CANCEL_ON_DISCONNECT_TRIGGERED = 'CLIENT_CANCEL_ON_DISCONNECT_TRIGGERED',
  // the OCO counter part order was triggered
  OCO_COUNTER_PART_TRIGGERED = 'OCO_COUNTER_PART_TRIGGERED',
  // the remaining order size was cancelled because it exceeded current position size
  REDUCE_ONLY_LIMIT = 'REDUCE_ONLY_LIMIT',
  // the order was replaced by a client replace request
  CLIENT_REPLACE = 'CLIENT_REPLACE',
  // the derisk order must be an IOC order
  DERISK_MUST_BE_IOC = 'DERISK_MUST_BE_IOC',
  // the derisk order must be a reduce-only order
  DERISK_MUST_BE_REDUCE_ONLY = 'DERISK_MUST_BE_REDUCE_ONLY',
  // derisk is not supported
  DERISK_NOT_SUPPORTED = 'DERISK_NOT_SUPPORTED',
  // the order type is invalid
  INVALID_ORDER_TYPE = 'INVALID_ORDER_TYPE',
  // the currency is not defined
  CURRENCY_NOT_DEFINED = 'CURRENCY_NOT_DEFINED',
  // the chain ID is invalid
  INVALID_CHAIN_ID = 'INVALID_CHAIN_ID',
}

export const EOrderRejectReasonInt: Record<EOrderRejectReason, number> = Object.freeze({
  [EOrderRejectReason.UNSPECIFIED]: 0,
  [EOrderRejectReason.CLIENT_CANCEL]: 1,
  [EOrderRejectReason.CLIENT_BULK_CANCEL]: 2,
  [EOrderRejectReason.CLIENT_SESSION_END]: 3,
  [EOrderRejectReason.MARKET_CANCEL]: 4,
  [EOrderRejectReason.IOC_CANCEL]: 5,
  [EOrderRejectReason.AON_CANCEL]: 6,
  [EOrderRejectReason.FOK_CANCEL]: 7,
  [EOrderRejectReason.EXPIRED]: 8,
  [EOrderRejectReason.FAIL_POST_ONLY]: 9,
  [EOrderRejectReason.FAIL_REDUCE_ONLY]: 10,
  [EOrderRejectReason.MM_PROTECTION]: 11,
  [EOrderRejectReason.SELF_TRADE_PROTECTION]: 12,
  [EOrderRejectReason.SELF_MATCHED_SUBACCOUNT]: 13,
  [EOrderRejectReason.OVERLAPPING_CLIENT_ORDER_ID]: 14,
  [EOrderRejectReason.BELOW_MARGIN]: 15,
  [EOrderRejectReason.LIQUIDATION]: 16,
  [EOrderRejectReason.INSTRUMENT_INVALID]: 17,
  [EOrderRejectReason.INSTRUMENT_DEACTIVATED]: 18,
  [EOrderRejectReason.SYSTEM_FAILOVER]: 19,
  [EOrderRejectReason.UNAUTHORISED]: 20,
  [EOrderRejectReason.SESSION_KEY_EXPIRED]: 21,
  [EOrderRejectReason.SUB_ACCOUNT_NOT_FOUND]: 22,
  [EOrderRejectReason.NO_TRADE_PERMISSION]: 23,
  [EOrderRejectReason.UNSUPPORTED_TIME_IN_FORCE]: 24,
  [EOrderRejectReason.MULTI_LEGGED_ORDER]: 25,
  [EOrderRejectReason.EXCEED_MAX_POSITION_SIZE]: 26,
  [EOrderRejectReason.EXCEED_MAX_SIGNATURE_EXPIRATION]: 27,
  [EOrderRejectReason.MARKET_ORDER_WITH_LIMIT_PRICE]: 28,
  [EOrderRejectReason.CLIENT_CANCEL_ON_DISCONNECT_TRIGGERED]: 29,
  [EOrderRejectReason.OCO_COUNTER_PART_TRIGGERED]: 30,
  [EOrderRejectReason.REDUCE_ONLY_LIMIT]: 31,
  [EOrderRejectReason.CLIENT_REPLACE]: 32,
  [EOrderRejectReason.DERISK_MUST_BE_IOC]: 33,
  [EOrderRejectReason.DERISK_MUST_BE_REDUCE_ONLY]: 34,
  [EOrderRejectReason.DERISK_NOT_SUPPORTED]: 35,
  [EOrderRejectReason.INVALID_ORDER_TYPE]: 36,
  [EOrderRejectReason.CURRENCY_NOT_DEFINED]: 37,
  [EOrderRejectReason.INVALID_CHAIN_ID]: 38
})
