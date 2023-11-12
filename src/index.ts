import { API_MINI_TICKER_REQUEST_MAP, Utils } from './utils'

export * from './MDG'

const lite = Utils.schemaMap({
  asset: [{
    kind: 'PERPETUAL',
    underlying: 'ETH',
    quote: 'USDC'
  }]
}, API_MINI_TICKER_REQUEST_MAP.FULL_TO_LITE)

const full = Utils.schemaMap(lite, API_MINI_TICKER_REQUEST_MAP.LITE_TO_FULL)

console.log('index.ts:15', JSON.stringify(lite, null, 2))
console.log('index.ts:16', JSON.stringify(full, null, 2))
