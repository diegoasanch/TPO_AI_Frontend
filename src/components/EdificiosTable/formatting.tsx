import { Tag } from '@chakra-ui/react'
import { Edificio } from '../../api/types/edificio'
import { EdificioForTable } from './constants'

export const formatEdificioForTable = (
  edificio: Edificio
): EdificioForTable => ({
  codigo: { data: edificio.codigo },
  nombre: { data: edificio.nombre },
  direccion: { data: edificio.direccion },
  acciones: { data: 'componentView', component: <Tag>Ver</Tag> },
})

export const formatEdificiosForTable = (
  edificios: Edificio[]
): EdificioForTable[] => {
  return edificios.map(formatEdificioForTable)
}
