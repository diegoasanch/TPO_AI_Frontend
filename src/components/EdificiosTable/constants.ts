import { Row } from '../Table/Table'
import { InferTableType } from '../Table/utils'

export const columns = [
  {
    key: 'codigo',
    label: 'Código',
  },
  {
    key: 'nombre',
    label: 'Nombre',
  },
  {
    key: 'direccion',
    label: 'Dirección',
  },
  {
    key: 'acciones',
    label: '',
  },
] as const
export type EdificiosTableType = InferTableType<typeof columns>

export type EdificioForTable = Row<EdificiosTableType>
