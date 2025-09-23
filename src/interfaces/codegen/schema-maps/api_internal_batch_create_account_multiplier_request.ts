import { BATCH_CREATE_ACCOUNT_MULTIPLIER_ELEMENT_MAP } from './batch_create_account_multiplier_element'
import { type SchemaPairMap } from './types'

// Schema map for the 'API_INTERNAL_BATCH_CREATE_ACCOUNT_MULTIPLIER_REQUEST' struct.
export const API_INTERNAL_BATCH_CREATE_ACCOUNT_MULTIPLIER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    metric: 'm',
    multiplers: ['m1', [BATCH_CREATE_ACCOUNT_MULTIPLIER_ELEMENT_MAP.FULL_TO_LITE]],
    effective_epoch_start: 'ee',
    effective_epoch_end: 'ee1'
  },
  LITE_TO_FULL: {
    m: 'metric',
    m1: ['multiplers', [BATCH_CREATE_ACCOUNT_MULTIPLIER_ELEMENT_MAP.LITE_TO_FULL]],
    ee: 'effective_epoch_start',
    ee1: 'effective_epoch_end'
  }
})
