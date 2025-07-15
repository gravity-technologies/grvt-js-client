import { type SchemaPairMap } from './types'

// Schema map for the 'CLIENT_TIER' struct.
export const CLIENT_TIER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    tier: 't',
    futures_taker_fee: 'ft',
    futures_maker_fee: 'fm',
    options_taker_fee: 'ot',
    options_maker_fee: 'om'
  },
  LITE_TO_FULL: {
    t: 'tier',
    ft: 'futures_taker_fee',
    fm: 'futures_maker_fee',
    ot: 'options_taker_fee',
    om: 'options_maker_fee'
  }
})
