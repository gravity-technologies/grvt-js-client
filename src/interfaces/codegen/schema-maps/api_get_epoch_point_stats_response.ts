import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_EPOCH_POINT_STATS_RESPONSE' struct.
export const API_GET_EPOCH_POINT_STATS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    epoch_start_time: 'es',
    epoch_end_time: 'ee',
    emitted_point: 'ep'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    es: 'epoch_start_time',
    ee: 'epoch_end_time',
    ep: 'emitted_point'
  }
})
