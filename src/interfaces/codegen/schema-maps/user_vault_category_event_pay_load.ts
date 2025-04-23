import { type SchemaPairMap } from './types'

// Schema map for the 'USER_VAULT_CATEGORY_EVENT_PAY_LOAD' struct.
export const USER_VAULT_CATEGORY_EVENT_PAY_LOAD_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    category_id: 'ci',
    vault_id: 'vi',
    action: 'a',
    num_bumps: 'nb'
  },
  LITE_TO_FULL: {
    ci: 'category_id',
    vi: 'vault_id',
    a: 'action',
    nb: 'num_bumps'
  }
})
