import { ECurrency, EStrategy } from './interfaces'

const EStrategyShort = Object.freeze({
  [EStrategy.FUTURE]: 'Fut',
  [EStrategy.PERPETUAL]: 'Perp',
  [EStrategy.CALL]: 'Call',
  [EStrategy.PUT]: 'Put',
  [EStrategy.CALL_SPREAD]: 'CSpd',
  [EStrategy.PUT_SPREAD]: 'PSpd',
  [EStrategy.FUTURE_SPREAD]: 'FSpd',
  [EStrategy.RISK_REVERSAL_CALL]: 'RRc',
  [EStrategy.RISK_REVERSAL_PUT]: 'RRp',
  [EStrategy.CALL_CALENDAR_SPREAD]: 'CCal',
  [EStrategy.PUT_CALENDAR_SPREAD]: 'PCal',
  [EStrategy.STRADDLE]: 'Strd',
  [EStrategy.STRANGLE]: 'Strg',
  [EStrategy.CALL_BUTTERFLY]: 'CFly',
  [EStrategy.PUT_BUTTERFLY]: 'PFly',
  [EStrategy.IRON_BUTTERFLY]: 'IFly',
  [EStrategy.CALL_CONDOR]: 'CCon',
  [EStrategy.PUT_CONDOR]: 'PCon',
  [EStrategy.IRON_CONDOR]: 'ICon',
  [EStrategy.CUSTOM]: 'Cstm'
}) as Readonly<Record<EStrategy, string>>

const SHORT_MONTHS = Object.freeze([
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
])

export class Helpers {
  static assetName (asset: {
    kind: `${EStrategy}`
    underlying: `${ECurrency}`
    quote: `${ECurrency}`
    expiration?: bigint
    strike_price?: bigint
  }, strategy?: EStrategy): string {
    const params: string[] = [
      asset.underlying as string,
      asset.quote as string
    ]

    const _strategy = strategy ?? asset.kind as unknown as EStrategy
    if (_strategy && EStrategyShort[_strategy]) {
      params.push(EStrategyShort[_strategy])
    }

    const _expiration = asset.expiration?.toString().slice(0, -6)
    if (_expiration) {
      const date = new Date(Number(_expiration))
      const dd = `0${date.getDate()}`.slice(-2)
      const mmm = SHORT_MONTHS[date.getMonth()]
      const yy = date.getFullYear().toString().slice(-2)
      params.push(`${dd}${mmm}${yy}`)
    }

    if (asset.strike_price) {
      const multiplierRegex = [ECurrency.BTC, ECurrency.ETH].includes(asset.underlying as ECurrency)
        ? /(\d{9})$/
        : /(\d{6})$/
      params.push(asset.strike_price.toString().replace(multiplierRegex, ''))
    }

    return params.filter(Boolean).join(' ')
  }
}
