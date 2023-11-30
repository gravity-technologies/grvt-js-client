import axios from 'axios'

export const RestfulService = axios.create({
  withCredentials: true
})
