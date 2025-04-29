import { type SchemaPairMap } from './types'

// Schema map for the 'QUERY_ACCOUNT_SUMMARY_REQUEST' struct.
export const QUERY_ACCOUNT_SUMMARY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    time_interval: 'ti',
    main_account_id: 'ma',
    sub_account_i_ds: 'sa'
  },
  LITE_TO_FULL: {
    ti: 'time_interval',
    ma: 'main_account_id',
    sa: 'sub_account_i_ds'
  }
})
