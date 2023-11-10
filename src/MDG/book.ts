import { type IConfig } from '../interfaces'

export class MDGBook {
  private readonly fullUrl: string
  private readonly liteUrl: string

  constructor (config: IConfig) {
    this.fullUrl = `${config.host}/full/${config.version}/book`
    this.liteUrl = `${config.host}/lite/${config.version}/book`
  }
}
