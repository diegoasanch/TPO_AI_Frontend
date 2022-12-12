import { ApiClient } from './client'
import { Usuario } from './types/usuarios'

const apiClient = ApiClient.getInstance()

export const personas = {
  async getAll(): Promise<Usuario[]> {
    const result = await apiClient.request<Usuario[]>({
      path: '/persona/all',
      method: 'GET',
    })
    return result
  },
}
