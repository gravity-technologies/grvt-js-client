import axios from 'axios'

// const ensureTruthyArray = <T>(value?: T | T[]): T[] => Array.isArray(value)
//   ? value
//   : value
//     ? [value]
//     : []

const jsonReplacerBigInt = (key: string, value: any) => {
  if (typeof value === 'bigint') {
    const maxInt64 = BigInt('0x7fffffffffffffff')
    return value > maxInt64
      ? `0x${value.toString(16)}`
      : value.toString()
  }
  return value
}

const jsonReviverBigInt = (key: string, value: any) => {
  if (typeof value === 'string' && /^\d+$/.test(value)) {
    return BigInt(value)
  }
  return value
}

export const RestfulService = axios.create({
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  transformRequest: [
    (data, headers) => JSON.stringify(data, jsonReplacerBigInt)
    // ...ensureTruthyArray(axios.defaults.transformRequest)
  ],
  transformResponse: [
    (data) => data ? JSON.parse(data, jsonReviverBigInt) : data
    // ...ensureTruthyArray(axios.defaults.transformResponse),
  ]
})
