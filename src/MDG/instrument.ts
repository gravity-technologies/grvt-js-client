import axios from 'axios'
import { type IApiGetInstrumentRequest, type IApiGetInstrumentResponse, type IApiGetInstrumentsRequest, type IApiGetInstrumentsResponse, type IConfig } from '../interfaces'
import { API_GET_INSTRUMENTS_REQUEST_MAP, API_GET_INSTRUMENTS_RESPONSE_MAP, API_GET_INSTRUMENT_REQUEST_MAP, API_GET_INSTRUMENT_RESPONSE_MAP, Utils } from '../utils'

export class MDGInstrument {
  private readonly _fullUrl: string
  private readonly _liteUrl: string

  constructor (config: IConfig) {
    this._fullUrl = `${config.host}/full/${config.version}`
    this._liteUrl = `${config.host}/lite/${config.version}`
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#get-instrument
   */
  retrieve (params: IApiGetInstrumentRequest) {
    return axios.post(this._liteUrl + '/instrument', Utils.schemaMap(params, API_GET_INSTRUMENT_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        const data = Utils.schemaMap(response.data, API_GET_INSTRUMENT_RESPONSE_MAP.LITE_TO_FULL) as IApiGetInstrumentResponse

        if (data?.results) {
          return data.results
        }

        throw new Error('Instrument not found')
      }
    )
  }

  /**
   * @see https://docs.gravitymarkets.io/market_data_api/#get-instruments
   */
  retrieveList (params: IApiGetInstrumentsRequest) {
    return axios.post(this._liteUrl + '/instruments', Utils.schemaMap(params, API_GET_INSTRUMENTS_REQUEST_MAP.FULL_TO_LITE)).then(
      (response) => {
        const data = Utils.schemaMap(response.data, API_GET_INSTRUMENTS_RESPONSE_MAP.LITE_TO_FULL) as IApiGetInstrumentsResponse

        if (data?.results) {
          return data.results
        }

        throw new Error('Instruments not found')
      }
    )
  }
}
