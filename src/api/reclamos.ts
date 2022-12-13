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

  async getReclamosByEdificio(params: { id: string }): Promise<Reclamo[]> {
    const result = await apiClient.request<Reclamo[]>({
      path: `/reclamo/edificio/${params.id}`,
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

  async createReclamo(params: {
    edificioId: string
    descripcion: string
    creatorId: string
    unidadId: string | null
    location?: string
  }): Promise<Reclamo> {
    const result = await apiClient.request<Reclamo>({
      path: '/reclamo',
      method: 'POST',
      payload: {
        codigo: params.edificioId,
        identificador: params.unidadId,
        descripcion: params.descripcion,
        documento: params.creatorId,
        ubicacion: params.location,
      },
    })
    return result
  },

  async uploadImage(params: { file: File; reclamoId: string }): Promise<void> {
    const formData = new FormData()
    formData.append('imageFile', params.file)
    formData.append('title', params.file.name)

    await apiClient.request({
      path: `/image/${params.reclamoId}`,
      method: 'POST',
      contentType: 'multipart/form-data',
      skipContentType: true,
      payload: formData,
    })
  },
}
