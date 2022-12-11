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
}
