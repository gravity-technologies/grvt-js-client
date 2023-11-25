import { validConfig, type IConfig } from '../interfaces'

/**
 * TODO: missing interfaces
 * This feature will not be ready for our alpha launch, and API is unstable.
 * @see https://docs.gravitymarkets.io/trading_api/#axes
 */
export class TDGAxe {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
  }
}
