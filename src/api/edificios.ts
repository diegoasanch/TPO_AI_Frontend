import { ApiClient } from './client'
import { Edificio } from './types/edificio'

const apiClient = ApiClient.getInstance()

export const edificios = {
  async getEdificios(): Promise<Edificio[]> {
    const result = await apiClient.request<Edificio[]>({
      path: '/edificio',
      method: 'GET',
    })
    return result
  },
  async getEdificioById(params: { id: string }): Promise<Edificio> {
    const result = await apiClient.request<Edificio>({
      path: `/edificio/${params.id}`,
      method: 'GET',
    })
    return result
  },
}
