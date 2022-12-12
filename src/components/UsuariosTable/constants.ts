import { Row } from '../Table/Table'
import { InferTableType } from '../Table/utils'

export const columns = [
  {
    key: 'id',
    label: 'documento',
  },
  {
    key: 'nombre',
    label: 'Nombre',
  },
  {
    key: 'role',
    label: 'Rol',
  },
] as const
export type UsuariosTable = InferTableType<typeof columns>

export type UsuarioForTable = Row<UsuariosTable>
