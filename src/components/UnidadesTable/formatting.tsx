import { Badge, Tag } from '@chakra-ui/react'
import { colors } from '@mui/material'
import { Unidad } from '../../api/types/unidades'
import { UnidadForTable } from './constants'

export const formatUnidadForTable = (unidad: Unidad): UnidadForTable => ({
  id: { data: unidad.id },
  piso: { data: unidad.piso },
  numero: { data: unidad.numero },
  habitado: {
    data: 'componentView',
    component: (
      <Badge
        bg={unidad.habitado ? colors.blue[100] : colors.grey[300]}
        textTransform="none"
        paddingX="5px"
      >
        {unidad.habitado ? 'Si' : 'No'}
      </Badge>
    ),
  },
  duenio: { data: unidad.duenio[0]?.documento || 'Sin dueño' },
  inquilinos: { data: unidad.inquilinos.length },
  acciones: { data: 'componentView', component: <Tag>Ver</Tag> },
})

export const formatUnidadesForTable = (
  unidades: Unidad[]
): UnidadForTable[] => {
  return unidades.map(formatUnidadForTable)
}
