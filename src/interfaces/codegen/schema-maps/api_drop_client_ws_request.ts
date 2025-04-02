import { type SchemaPairMap } from './types'

// Schema map for the 'API_DROP_CLIENT_WS_REQUEST' struct.
export const API_DROP_CLIENT_WS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id'
  }
})
