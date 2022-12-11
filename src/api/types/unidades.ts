import { Edificio } from './edificio'
import { Persona } from './usuarios'

export type Unidad = {
  id: number
  piso: string
  numero: string
  habitado: boolean
  edificio: Edificio
  duenio: Persona[]
  inquilinos: Persona[]
}
