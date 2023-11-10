import { type IConfig } from '../interfaces'

export class MDGTicker {
  private readonly fullUrl: string
  private readonly liteUrl: string

  constructor (config: IConfig) {
    this.fullUrl = `${config.host}/full/${config.version}/ticker`
    this.liteUrl = `${config.host}/lite/${config.version}/ticker`
  }
}
