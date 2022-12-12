import { Edificio } from './edificio'
import { Unidad } from './unidades'
import { Usuario } from './usuarios'

export type EstadoReclamo =
  | 'nuevo'
  | 'abierto'
  | 'enProceso'
  | 'desestimado'
  | 'anulado'
  | 'terminado'

export type Reclamo = {
  numero: number
  usuario: Usuario
  edificio: Edificio
  ubicacion: string
  descripcion: string
  unidad?: Unidad
  estado: EstadoReclamo
  imagenes: Imagen[]
}

export type Imagen = {
  numero: number
  direccion: string
  tipo: string
}
