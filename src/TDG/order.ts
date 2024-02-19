import {
  API_CANCEL_ALL_ORDERS_REQUEST_MAP,
  API_CANCEL_ALL_ORDERS_RESPONSE_MAP,
  API_CANCEL_ORDER_REQUEST_MAP,
  API_CANCEL_ORDER_RESPONSE_MAP,
  API_CREATE_ORDER_REQUEST_MAP,
  API_CREATE_ORDER_RESPONSE_MAP,
  API_OPEN_ORDERS_REQUEST_MAP,
  API_OPEN_ORDERS_RESPONSE_MAP,
  validConfig,
  type IApiCancelAllOrdersRequest,
  type IApiCancelAllOrdersResponse,
  type IApiCancelOrderRequest,
  type IApiCancelOrderResponse,
  type IApiCreateOrderRequest,
  type IApiCreateOrderResponse,
  type IApiOpenOrdersRequest,
  type IApiOpenOrdersResponse,
  type IConfig
} from '../interfaces'
import { RestfulService } from '../services'
import { Utils } from '../utils'

export class TDGOrder {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#create-order
   */
  create (payload: IApiCreateOrderRequest) {
    return RestfulService.post(
      this._liteUrl + '/create_order',
      Utils.schemaMap(payload, API_CREATE_ORDER_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CREATE_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IApiCreateOrderResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-order
   */
  cancel (payload: IApiCancelOrderRequest) {
    return RestfulService.post(
      this._liteUrl + '/cancel_order',
      Utils.schemaMap(payload, API_CANCEL_ORDER_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelOrderResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-all-orders
   */
  cancelAll (payload: IApiCancelAllOrdersRequest) {
    return RestfulService.post(
      this._liteUrl + '/cancel_all_orders',
      Utils.schemaMap(payload, API_CANCEL_ALL_ORDERS_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_CANCEL_ALL_ORDERS_RESPONSE_MAP.LITE_TO_FULL) as IApiCancelAllOrdersResponse
    })
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#cancel-all-session-orders
   */
  cancelAllSessionOrders () {
    throw new Error('This has been marked as a POST-LAUNCH feature, see https://docs.gravitymarkets.io/trading_api/#cancel-all-session-orders')
  }

  /**
   * @see https://docs.gravitymarkets.io/trading_api/#open-orders
   */
  openOrders (payload: IApiOpenOrdersRequest) {
    return RestfulService.post(
      this._liteUrl + '/open_orders',
      Utils.schemaMap(payload, API_OPEN_ORDERS_REQUEST_MAP.FULL_TO_LITE, true)
    ).then((response) => {
      return Utils.schemaMap(response.data, API_OPEN_ORDERS_RESPONSE_MAP.LITE_TO_FULL) as IApiOpenOrdersResponse
    })
  }

  /**
   * TODO: missing interfaces
   * @see https://docs.gravitymarkets.io/trading_api/#order-history
   */
  history () {
    throw new Error('Historical data is served through our DB and may not match new data in flight, see https://docs.gravitymarkets.io/trading_api/#order-history')
  }
}
