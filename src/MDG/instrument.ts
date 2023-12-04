import { API_GET_INSTRUMENTS_REQUEST_MAP, API_GET_INSTRUMENTS_RESPONSE_MAP, API_GET_INSTRUMENT_REQUEST_MAP, API_GET_INSTRUMENT_RESPONSE_MAP, validConfig, type IApiGetInstrumentRequest, type IApiGetInstrumentResponse, type IApiGetInstrumentsRequest, type IApiGetInstrumentsResponse, type IConfig } from '../interfaces'
import { RestfulService } from '../services'
import { Utils } from '../utils'

export class MDGInstrument {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    const parseConfig = validConfig(config)
    this._fullUrl = `${parseConfig.host}/full/${parseConfig.version}`
    this._liteUrl = `${parseConfig.host}/lite/${parseConfig.version}`
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#get-instrument
   */
  instrument (payload: IApiGetInstrumentRequest) {
    return RestfulService.post(
      this._liteUrl + '/instrument',
      Utils.schemaMap(payload, API_GET_INSTRUMENT_REQUEST_MAP.FULL_TO_LITE),
      { withCredentials: false }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_INSTRUMENT_RESPONSE_MAP.LITE_TO_FULL) as IApiGetInstrumentResponse
    })
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#get-instruments
   */
  instruments (payload: IApiGetInstrumentsRequest) {
    return RestfulService.post(
      this._liteUrl + '/instruments',
      Utils.schemaMap(payload, API_GET_INSTRUMENTS_REQUEST_MAP.FULL_TO_LITE),
      { withCredentials: false }
    ).then((response) => {
      return Utils.schemaMap(response.data, API_GET_INSTRUMENTS_RESPONSE_MAP.LITE_TO_FULL) as IApiGetInstrumentsResponse
    })
  }
}
