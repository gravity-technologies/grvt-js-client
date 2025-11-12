import { type SchemaPairMap } from './types'

// Schema map for the 'UPDATE_REWARD_EPOCH_REQUEST' struct.
export const UPDATE_REWARD_EPOCH_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    is_released: 'ir'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    ir: 'is_released'
  }
})
