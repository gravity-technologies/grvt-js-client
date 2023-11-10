import { type IConfig } from '../interfaces'

export class MDGTrades {
  private readonly fullUrl: string
  private readonly liteUrl: string

  constructor (config: IConfig) {
    this.fullUrl = `${config.host}/full/${config.version}/trades`
    this.liteUrl = `${config.host}/lite/${config.version}/trades`
  }
}
