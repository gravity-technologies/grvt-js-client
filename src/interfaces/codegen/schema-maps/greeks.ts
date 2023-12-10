import { type SchemaPairMap } from './types'

// Schema map for the 'GREEKS' struct.
export const GREEKS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    underlying_price: 'up',
    risk_free_rate: 'rf',
    delta: 'd',
    gamma: 'g',
    iv: 'i',
    vega: 'v',
    volga: 'v1',
    vanna: 'v2',
    theta: 't',
    rho: 'r'
  },
  LITE_TO_FULL: {
    up: 'underlying_price',
    rf: 'risk_free_rate',
    d: 'delta',
    g: 'gamma',
    i: 'iv',
    v: 'vega',
    v1: 'volga',
    v2: 'vanna',
    t: 'theta',
    r: 'rho'
  }
})
