import { type IConfig } from '../interfaces'
import { TDGAccount } from './account'
import { TDGAxe } from './axe'
import { TDGOrder } from './order'
import { TDGRfq } from './rfq'

export class TDG {
  readonly account: TDGAccount
  readonly axe: TDGAxe
  readonly order: TDGOrder
  readonly rfq: TDGRfq

  constructor (config: IConfig) {
    this.account = new TDGAccount(config)
    this.axe = new TDGAxe(config)
    this.order = new TDGOrder(config)
    this.rfq = new TDGRfq(config)
  }
}
