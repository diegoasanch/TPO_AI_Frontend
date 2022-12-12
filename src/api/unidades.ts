import { ApiClient } from './client'
import { Unidad } from './types/unidades'

const apiClient = ApiClient.getInstance()

export const unidades = {
  async getUnidadesByEdificio(params: { id: string }): Promise<Unidad[]> {
    const result = await apiClient.request<Unidad[]>({
      path: `/unidad/byEdificio/${params.id}`,
      method: 'GET',
    })
    return result
  },

  async createUnidad(params: {
    ownerId: string
    buildingId: string | number
    renterId?: string
    number: string
    floor: string
  }): Promise<Unidad> {
    const result = await apiClient.request<Unidad>({
      path: `/unidad`,
      method: 'POST',
      payload: {
        duenioId: params.ownerId,
        edificoId: params.buildingId,
        inquilino: params.renterId,
        numero: params.number,
        piso: params.floor,
      },
    })
    return result
  },

  async getById(params: { id: string }): Promise<Unidad> {
    return await apiClient.request<Unidad>({
      path: `/unidad/${params.id}`,
      method: 'GET',
    })
  },

  async liberarDuenio(params: { id: string }): Promise<void> {
    return await apiClient.request({
      path: `/unidad/liberarDuenio/${params.id}`,
      method: 'DELETE',
    })
  },

  async liberarInquilino(params: { id: string }): Promise<void> {
    return await apiClient.request({
      path: `/unidad/liberarInquilino/${params.id}`,
      method: 'DELETE',
    })
  },

  async alquilar(params: { id: string; renterId: string }): Promise<void> {
    return await apiClient.request({
      path: `/unidad/${params.id}/alquilar/${params.renterId}`,
      method: 'POST',
    })
  },

  async cambiarDuenio(params: { id: string; ownerId: string }): Promise<void> {
    return await apiClient.request({
      path: `/unidad/${params.id}/cambiarTitularidad/${params.ownerId}`,
      method: 'POST',
    })
  },
}
