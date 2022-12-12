import { useMemo } from 'react'
import { Usuario } from '../../api/types/usuarios'
import { Table } from '../Table/Table'
import { columns } from './constants'
import { formatUsersForTable } from './formatting'

export type UsuariosTableProps = {
  usuarios: Usuario[]
}

export const UsuariosTable = ({ usuarios }: UsuariosTableProps) => {
  const tableData = useMemo(() => formatUsersForTable(usuarios), [usuarios])

  return <Table columns={columns} data={tableData} />
}
