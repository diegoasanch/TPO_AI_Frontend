import { ApiClient } from './client'
import { CreateUsuarioResponse, LoginResult, Usuario } from './types/usuarios'

const apiClient = ApiClient.getInstance()

export const personas = {
  async login(params: { id: string; password: string }): Promise<LoginResult> {
    const result = await apiClient.request<LoginResult>({
      path: '/persona/login',
      method: 'POST',
      payload: {
        documento: params.id,
        nombre: '',
        password: params.password,
      },
    })
    return result
  },

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
