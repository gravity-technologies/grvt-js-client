export enum EClusterConfigType {
  // Client tier config
  CLIENT_TIER = 'CLIENT_TIER',
  // Initial margin config
  INITIAL_MARGIN = 'INITIAL_MARGIN',
  // Enable configurable leverage config
  CONFIGURABLE_LEVERAGE_FLAGS = 'CONFIGURABLE_LEVERAGE_FLAGS',
  // Configs for waiving margin checks in risk engine for position-reducing trades
  WAIVE_MARGIN_CHECK_IF_REDUCING_POSITION_FLAGS = 'WAIVE_MARGIN_CHECK_IF_REDUCING_POSITION_FLAGS',
  // Configs for pre-emptive cancellation behavior
  PRE_EMPTIVE_CANCEL_FLAGS = 'PRE_EMPTIVE_CANCEL_FLAGS',
  // Configs for external-match handling behavior on cluster
  EXTERNAL_MATCH_MAKER_FLAGS = 'EXTERNAL_MATCH_MAKER_FLAGS',
  // Configs for extending session keys to 37 days
  FLAG_EXTEND_SESSION_KEYS_THIRTY_SEVEN_DAYS = 'FLAG_EXTEND_SESSION_KEYS_THIRTY_SEVEN_DAYS',
  // Configs for account blacklist
  ACCOUNT_BLACKLIST = 'ACCOUNT_BLACKLIST',
  // Configs for vault APIs in risk service
  VAULT_API_FLAGS = 'VAULT_API_FLAGS',
  // Configs for extending TPSL order's expiry to 180 days and allow matching all orders even after session key expires
  FLAG_LONG_LIVED_ORDER_MATCHING = 'FLAG_LONG_LIVED_ORDER_MATCHING',
  // Configs for fixing pub empty match
  FIX_PUB_EMPTY_MATCH = 'FIX_PUB_EMPTY_MATCH',
  // Configs for enabling RPI matching
  FLAG_ENABLE_RPI_MATCHING = 'FLAG_ENABLE_RPI_MATCHING',
  // Configs for skipping IM check for reduce-only orders
  FLAG_SKIP_REDUCE_ONLY_IM_CHECK = 'FLAG_SKIP_REDUCE_ONLY_IM_CHECK',
  // Configs for allowing partial reduce-only execution
  FLAG_ALLOW_PARTIAL_REDUCE_ONLY_EXECUTION = 'FLAG_ALLOW_PARTIAL_REDUCE_ONLY_EXECUTION',
  // Configs for canceling reduce-only orders on position flip or close
  FLAG_CANCEL_REDUCE_ONLY_ON_FLIP_OR_CLOSE = 'FLAG_CANCEL_REDUCE_ONLY_ON_FLIP_OR_CLOSE',
  // Configs for enabling vault management fee tick
  FLAG_VAULT_MANAGEMENT_FEE_TICK = 'FLAG_VAULT_MANAGEMENT_FEE_TICK',
  // Configs for enabling vault redemption queue tracking
  FLAG_VAULT_REDEMPTION_QUEUE_TRACKING = 'FLAG_VAULT_REDEMPTION_QUEUE_TRACKING',
  // Configs for enabling currency store, to deprecate currency enum
  FLAG_ENABLE_CURRENCY_STORE = 'FLAG_ENABLE_CURRENCY_STORE',
  // Configs for GRVT-defined vault redemption parameters (applies to all vaults)
  VAULT_REDEMPTION_PARAMETERS = 'VAULT_REDEMPTION_PARAMETERS',
  // Flag to switch cluster-side orderbook delta publish rate to once per 50ms. If disabled, uses 100ms as the publish rate.
  FLAG_SET_ORDER_BOOK_DELTA_CLUSTER_PUB_FREQ_50_MS = 'FLAG_SET_ORDER_BOOK_DELTA_CLUSTER_PUB_FREQ_50_MS',
  // Configs for enabling derisk
  FLAG_DERISK_PARAMETERS = 'FLAG_DERISK_PARAMETERS',
  // Flag to add currency in asset context
  FLAG_ADD_CURRENCY_IN_ASSET_TRADE_CONTEXT = 'FLAG_ADD_CURRENCY_IN_ASSET_TRADE_CONTEXT',
  // Flag to enable ECN matching
  FLAG_ENABLE_ECN_MATCHING = 'FLAG_ENABLE_ECN_MATCHING',
  // Flag to disable poison vault redemption filter on July 11th, 2025
  FLAG_DISABLE_POISON_VAULT_REDEMPTION_FILTER = 'FLAG_DISABLE_POISON_VAULT_REDEMPTION_FILTER',
  // Flag to enable/disable the minimum initial investment for vaults
  FLAG_VAULT_MINIMUM_INITIAL_INVESTMENT = 'FLAG_VAULT_MINIMUM_INITIAL_INVESTMENT',
  // Flag to enable the fix for double publish stateOrder
  FLAG_FIX_DOUBLE_PUBLISH_STATE_ORDER = 'FLAG_FIX_DOUBLE_PUBLISH_STATE_ORDER',
  // Flag to enable price protection
  FLAG_PRICE_PROTECTION = 'FLAG_PRICE_PROTECTION',
  // Flag to enable bulk order
  FLAG_ENABLE_BULK_ORDER = 'FLAG_ENABLE_BULK_ORDER',
  // Flag to allow decreasing fee immediately
  FLAG_ALLOW_DECREASE_FEE_IMMEDIATELY = 'FLAG_ALLOW_DECREASE_FEE_IMMEDIATELY',
  // Flag to reject ECN from broker ahead of sequence
  FLAG_REJECT_AHEAD_OF_SEQUENCE_ECN_FROM_BROKER = 'FLAG_REJECT_AHEAD_OF_SEQUENCE_ECN_FROM_BROKER',
  // Flag to allow total equity after trade loss to be below IM
  FLAG_ALLOW_TOTAL_EQUITY_AFTER_TRADE_LOSS_BELOW_IM = 'FLAG_ALLOW_TOTAL_EQUITY_AFTER_TRADE_LOSS_BELOW_IM',
  // Flag to enable position cumulative data
  FLAG_ENABLE_POSITION_CUMULATIVE_DATA = 'FLAG_ENABLE_POSITION_CUMULATIVE_DATA',
  // Flag to disable vault creation
  FLAG_DISABLE_VAULT_CREATE = 'FLAG_DISABLE_VAULT_CREATE',
  // Flag to enable investment queue
  FLAG_ENABLE_INVESTMENT_QUEUE = 'FLAG_ENABLE_INVESTMENT_QUEUE',
  // Flag to enable calculating taker trade level realized PnL
  FLAG_CALCULATE_TAKER_TRADE_LEVEL_REALIZED_PNL = 'FLAG_CALCULATE_TAKER_TRADE_LEVEL_REALIZED_PNL',
  // Payload to configure cross-exchange vault access tiers by lifetime trading volume.
  CONFIGURE_CEV_ACCESS_TIERS = 'CONFIGURE_CEV_ACCESS_TIERS',
  // Flag to enable vault lock
  FLAG_ENABLE_VAULT_LOCK = 'FLAG_ENABLE_VAULT_LOCK',
  // Flag to enable MsgTimer in all services
  FLAG_ENABLE_MSG_TIMER = 'FLAG_ENABLE_MSG_TIMER',
  // Flag to enable position transfer
  FLAG_ENABLE_POSITION_TRANSFER = 'FLAG_ENABLE_POSITION_TRANSFER',
  // Flag to enable total equity with unrealized funding payment on snap sub account
  FLAG_ENABLE_TOTAL_EQUITY_WITH_UNREALIZED_FUNDING_PAYMENT_ON_SNAP_SUB_ACCOUNT = 'FLAG_ENABLE_TOTAL_EQUITY_WITH_UNREALIZED_FUNDING_PAYMENT_ON_SNAP_SUB_ACCOUNT',
  // Flag to let scribe write to local file storage
  FLAG_ENABLE_SCRIBE_LOCAL_FILE_STORAGE = 'FLAG_ENABLE_SCRIBE_LOCAL_FILE_STORAGE',
  // Flag to exclude liquidation from public trades
  FLAG_EXCLUDE_LIQUIDATION_FROM_PUBLIC_TRADES = 'FLAG_EXCLUDE_LIQUIDATION_FROM_PUBLIC_TRADES',
}

export const EClusterConfigTypeInt: Record<EClusterConfigType, number> = Object.freeze({
  [EClusterConfigType.CLIENT_TIER]: 1,
  [EClusterConfigType.INITIAL_MARGIN]: 2,
  [EClusterConfigType.CONFIGURABLE_LEVERAGE_FLAGS]: 3,
  [EClusterConfigType.WAIVE_MARGIN_CHECK_IF_REDUCING_POSITION_FLAGS]: 4,
  [EClusterConfigType.PRE_EMPTIVE_CANCEL_FLAGS]: 5,
  [EClusterConfigType.EXTERNAL_MATCH_MAKER_FLAGS]: 6,
  [EClusterConfigType.FLAG_EXTEND_SESSION_KEYS_THIRTY_SEVEN_DAYS]: 7,
  [EClusterConfigType.ACCOUNT_BLACKLIST]: 8,
  [EClusterConfigType.VAULT_API_FLAGS]: 9,
  [EClusterConfigType.FLAG_LONG_LIVED_ORDER_MATCHING]: 10,
  [EClusterConfigType.FIX_PUB_EMPTY_MATCH]: 11,
  [EClusterConfigType.FLAG_ENABLE_RPI_MATCHING]: 12,
  [EClusterConfigType.FLAG_SKIP_REDUCE_ONLY_IM_CHECK]: 13,
  [EClusterConfigType.FLAG_ALLOW_PARTIAL_REDUCE_ONLY_EXECUTION]: 14,
  [EClusterConfigType.FLAG_CANCEL_REDUCE_ONLY_ON_FLIP_OR_CLOSE]: 15,
  [EClusterConfigType.FLAG_VAULT_MANAGEMENT_FEE_TICK]: 16,
  [EClusterConfigType.FLAG_VAULT_REDEMPTION_QUEUE_TRACKING]: 17,
  [EClusterConfigType.FLAG_ENABLE_CURRENCY_STORE]: 18,
  [EClusterConfigType.VAULT_REDEMPTION_PARAMETERS]: 19,
  [EClusterConfigType.FLAG_SET_ORDER_BOOK_DELTA_CLUSTER_PUB_FREQ_50_MS]: 20,
  [EClusterConfigType.FLAG_DERISK_PARAMETERS]: 21,
  [EClusterConfigType.FLAG_ADD_CURRENCY_IN_ASSET_TRADE_CONTEXT]: 22,
  [EClusterConfigType.FLAG_ENABLE_ECN_MATCHING]: 23,
  [EClusterConfigType.FLAG_DISABLE_POISON_VAULT_REDEMPTION_FILTER]: 24,
  [EClusterConfigType.FLAG_VAULT_MINIMUM_INITIAL_INVESTMENT]: 25,
  [EClusterConfigType.FLAG_FIX_DOUBLE_PUBLISH_STATE_ORDER]: 26,
  [EClusterConfigType.FLAG_PRICE_PROTECTION]: 27,
  [EClusterConfigType.FLAG_ENABLE_BULK_ORDER]: 28,
  [EClusterConfigType.FLAG_ALLOW_DECREASE_FEE_IMMEDIATELY]: 29,
  [EClusterConfigType.FLAG_REJECT_AHEAD_OF_SEQUENCE_ECN_FROM_BROKER]: 30,
  [EClusterConfigType.FLAG_ALLOW_TOTAL_EQUITY_AFTER_TRADE_LOSS_BELOW_IM]: 31,
  [EClusterConfigType.FLAG_ENABLE_POSITION_CUMULATIVE_DATA]: 32,
  [EClusterConfigType.FLAG_DISABLE_VAULT_CREATE]: 33,
  [EClusterConfigType.FLAG_ENABLE_INVESTMENT_QUEUE]: 34,
  [EClusterConfigType.FLAG_CALCULATE_TAKER_TRADE_LEVEL_REALIZED_PNL]: 35,
  [EClusterConfigType.CONFIGURE_CEV_ACCESS_TIERS]: 36,
  [EClusterConfigType.FLAG_ENABLE_VAULT_LOCK]: 37,
  [EClusterConfigType.FLAG_ENABLE_MSG_TIMER]: 38,
  [EClusterConfigType.FLAG_ENABLE_POSITION_TRANSFER]: 39,
  [EClusterConfigType.FLAG_ENABLE_TOTAL_EQUITY_WITH_UNREALIZED_FUNDING_PAYMENT_ON_SNAP_SUB_ACCOUNT]: 40,
  [EClusterConfigType.FLAG_ENABLE_SCRIBE_LOCAL_FILE_STORAGE]: 41,
  [EClusterConfigType.FLAG_EXCLUDE_LIQUIDATION_FROM_PUBLIC_TRADES]: 42
})
