import { Row } from '../Table/Table'
import { InferTableType } from '../Table/utils'

export const columns = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'piso',
    label: 'Piso',
  },
  {
    key: 'numero',
    label: 'Numero',
  },
  {
    key: 'habitado',
    label: 'Habitado',
  },
  {
    key: 'duenio',
    label: 'Dueño',
  },
  {
    key: 'inquilinos',
    label: 'Inquilinos',
  },
  {
    key: 'acciones',
    label: '',
  },
] as const
export type UnidadesTableType = InferTableType<typeof columns>

export type UnidadForTable = Row<UnidadesTableType>
