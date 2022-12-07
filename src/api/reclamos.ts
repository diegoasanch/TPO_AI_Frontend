import { ClaimStatus } from '../utils/constants'
import { ApiClient } from './client'
import { Reclamo } from './types/reclamos'

const apiClient = ApiClient.getInstance()

export const reclamos = {
  async getReclamos(): Promise<Reclamo[]> {
    const result = await apiClient.request<Reclamo[]>({
      path: '/reclamo',
      method: 'GET',
    })
    return result
  },

  async getReclamo(params: { id: string }): Promise<Reclamo> {
    const result = await apiClient.request<Reclamo>({
      path: `/reclamo/${params.id}`,
      method: 'GET',
    })
    return result
  },

  async updateStatus(params: {
    id: string
    status: ClaimStatus
  }): Promise<void> {
    await apiClient.request({
      path: `/reclamo/${params.id}/${params.status}`,
      method: 'PUT',
    })
  },
}
