import { type SchemaPairMap } from './types'

// Schema map for the 'API_LIST_AGGREGATED_ACCOUNT_SUMMARY_REQUEST' struct.
export const API_LIST_AGGREGATED_ACCOUNT_SUMMARY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_ids: 'ma'
  },
  LITE_TO_FULL: {
    ma: 'main_account_ids'
  }
})
