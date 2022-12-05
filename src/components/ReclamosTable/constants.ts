import { InferTableType } from '../Table/utils'
import { Row } from '../Table/Table'

export const columns = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'descripcion',
    label: 'Descripción',
  },
  {
    key: 'edificio',
    label: 'Edificio',
  },
  {
    key: 'unidad',
    label: 'Unidad',
  },
  {
    key: 'nombreUsuario',
    label: 'Usuario',
  },
  {
    key: 'acciones',
    label: '',
  },
] as const
export type ReclamosTableType = InferTableType<typeof columns>

export type ReclamoForTable = Row<ReclamosTableType>
