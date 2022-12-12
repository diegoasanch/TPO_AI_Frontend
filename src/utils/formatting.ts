import { Edificio } from '../api/types/edificio'
import { Unidad } from '../api/types/unidades'
import { SelectItem } from '../components/Select/Select'

export const formatEdificioSelectOption = (edificio: Edificio): SelectItem => ({
  value: String(edificio.codigo),
  label: `${edificio.nombre} - ${edificio.direccion}`,
})

export const formatUnidadSelectOption = (unidad: Unidad): SelectItem => ({
  value: String(unidad.id),
  label: `Piso: ${unidad.piso}, Numero: ${unidad.numero}`,
})
