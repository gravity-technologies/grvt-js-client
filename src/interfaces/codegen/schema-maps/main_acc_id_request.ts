import { type SchemaPairMap } from './types'

// Schema map for the 'MAIN_ACC_ID_REQUEST' struct.
export const MAIN_ACC_ID_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id'
  }
})
