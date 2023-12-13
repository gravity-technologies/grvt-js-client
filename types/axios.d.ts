import { type AxiosResponse } from 'axios'

type TAxiosResponse<T = any> = Promise<AxiosResponse<T>>
