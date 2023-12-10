import { type SchemaPairMap } from './types'

// Schema map for the 'RFQ_BOOK_QUOTE' struct.
export const RFQ_BOOK_QUOTE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    quote_id: 'qi',
    client_quote_id: 'cq',
    quoter_subaccount_id: 'qs',
    quote_expiration: 'qe',
    quote_price: 'qp',
    size_no_decimal: 'sn'
  },
  LITE_TO_FULL: {
    qi: 'quote_id',
    cq: 'client_quote_id',
    qs: 'quoter_subaccount_id',
    qe: 'quote_expiration',
    qp: 'quote_price',
    sn: 'size_no_decimal'
  }
})
