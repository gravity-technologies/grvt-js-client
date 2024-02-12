import axios from 'axios'
import { JsonUtils, Utils } from '../utils'

// const ensureTruthyArray = <T>(value?: T | T[]): T[] => Array.isArray(value)
//   ? value
//   : value
//     ? [value]
//     : []

export const RestfulService = axios.create({
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  transformRequest: [
    (data, headers) => JSON.stringify(data, Utils.jsonReplacerBigInt)
    // ...ensureTruthyArray(axios.defaults.transformRequest)
  ],
  transformResponse: [
    (data) => JsonUtils.parse(data, Utils.jsonReviverBigInt, data)
    // ...ensureTruthyArray(axios.defaults.transformResponse),
  ]
})

RestfulService.interceptors.response.use(undefined, (error) => {
  if (error.response?.data?.api_msg) {
    error.message = error.response.data.api_msg
  }

  throw error
})
