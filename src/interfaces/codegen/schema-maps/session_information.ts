import { type SchemaPairMap } from './types'

// Schema map for the 'SESSION_INFORMATION' struct.
export const SESSION_INFORMATION_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    country_code: 'cc',
    client_session_id: 'cs',
    device_screen_size: 'ds',
    device_os: 'do',
    device_os_version: 'do1'
  },
  LITE_TO_FULL: {
    cc: 'country_code',
    cs: 'client_session_id',
    ds: 'device_screen_size',
    do: 'device_os',
    do1: 'device_os_version'
  }
})
