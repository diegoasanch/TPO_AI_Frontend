import { ApiClient } from './client'
import { CreateUsuarioResponse, Usuario } from './types/usuarios'

const apiClient = ApiClient.getInstance()

export const personas = {
  async getAll(): Promise<Usuario[]> {
    const result = await apiClient.request<Usuario[]>({
      path: '/persona/all',
      method: 'GET',
    })
    return result
  },

  async create(params: {
    name: string
    id: string
    password: string
  }): Promise<CreateUsuarioResponse> {
    const result = await apiClient.request<CreateUsuarioResponse>({
      path: '/persona',
      method: 'POST',
      payload: {
        nombre: params.name,
        documento: params.id,
        password: params.password,
      },
    })
    return result
  },
}
