import { ApiClient, ApiResult } from './client'
import { Reclamo } from './types/reclamos'

const apiClient = ApiClient.getInstance()

export const reclamos = {
  async getReclamos(): Promise<ApiResult<Reclamo[]>> {
    const result = await apiClient.request<Reclamo[]>({
      path: '/reclamo',
      method: 'GET',
    })
    return result
  },
}
