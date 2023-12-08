import axios from 'axios'

// const ensureTruthyArray = <T>(value?: T | T[]): T[] => Array.isArray(value)
//   ? value
//   : value
//     ? [value]
//     : []

const jsonReplacerBigInt = (key: string, value: any) => {
  if (typeof value === 'bigint') {
    return value.toString()
  }
  return value
}

const jsonReviverBigInt = (key: string, value: any) => {
  if (typeof value === 'string' && (/^\d+$/.test(value) || /^0x[0-9a-fA-F]+$/.test(value))) {
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

RestfulService.interceptors.response.use(undefined, (error) => {
  if (error.response?.data?.api_msg) {
    error.message = error.response.data.api_msg
  }

  throw error
})
