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
}
