import { type SchemaPairMap } from './types'

// Schema map for the 'USER_TRACKING_EVENT' struct.
export const USER_TRACKING_EVENT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_id: 'ei',
    tracking_version: 'tv',
    event_time: 'et',
    event_type: 'et1',
    event_sub_type: 'es',
    client_session_id: 'cs',
    device_os: 'do',
    device_os_version: 'do1',
    sub_account_id: 'sa',
    trading_address: 'ta',
    screen_size: 'ss',
    event_data: 'ed',
    user_id: 'ui',
    account_id: 'ai',
    auth_session_hash: 'as',
    country_code: 'cc'
  },
  LITE_TO_FULL: {
    ei: 'event_id',
    tv: 'tracking_version',
    et: 'event_time',
    et1: 'event_type',
    es: 'event_sub_type',
    cs: 'client_session_id',
    do: 'device_os',
    do1: 'device_os_version',
    sa: 'sub_account_id',
    ta: 'trading_address',
    ss: 'screen_size',
    ed: 'event_data',
    ui: 'user_id',
    ai: 'account_id',
    as: 'auth_session_hash',
    cc: 'country_code'
  }
})
