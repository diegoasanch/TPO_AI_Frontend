import { Tag } from '@chakra-ui/react'
import { Reclamo } from '../../api/types/reclamos'
import { camelToTitle } from '../../utils/text'
import { TableGroup } from '../GroupedTable/GroupedTable'
import { ReclamoForTable, ReclamosTableType } from './constants'

export const formatReclamoForTable = (reclamo: Reclamo): ReclamoForTable => ({
  id: { data: String(reclamo.numero) },
  descripcion: { data: reclamo.descripcion },
  edificio: { data: `${reclamo.edificio.codigo} - ${reclamo.edificio.nombre}` },
  nombreUsuario: { data: reclamo.usuario.nombre },
  unidad: { data: reclamo.unidad?.numero || 'N/A' },
  acciones: { data: 'componentView', component: <Tag>Ver</Tag> },
})

export const formatReclamosForTable = (
  reclamos: Reclamo[]
): ReclamoForTable[] => {
  return reclamos.map(formatReclamoForTable)
}

export const groupAndFormatReclamosForTable = (
  reclamos: Reclamo[]
): TableGroup<ReclamosTableType>[] => {
  // Get unique "estados"
  const estados = reclamos
    .map((reclamo) => reclamo.estado)
    .filter((estado, index, self) => self.indexOf(estado) === index)
  // Group and format reclamos by "estado"
  return estados.map((estado) => ({
    title: camelToTitle(estado),
    data: formatReclamosForTable(
      reclamos.filter((reclamo) => reclamo.estado === estado)
    ),
  }))
}
