import { Edificio } from './edificio'
import { Usuario, Persona } from './usuarios'

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
  unidad: {
    id: number
    piso: string
    numero: string
    habitado: boolean
    edificio: Edificio
    duenio: Persona[]
    inquilinos: Persona[]
  }
  estado: EstadoReclamo
  imagenes: Imagen[]
}

export type Imagen = {
  numero: number
  direccion: string
  tipo: string
}
