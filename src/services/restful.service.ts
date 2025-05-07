import axios from 'axios'

export const createAxiosInstance = () => {
  const instance = axios.create({
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
  })

  instance.interceptors.response.use(undefined, (error) => {
    if (error.response?.data?.api_msg) {
      error.message = error.response.data.api_msg
    }
    throw error
  })

  return instance
}
