import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Unidad } from '../../api/types/unidades'
import { buildRouteParams } from '../../routes/builder'
import { routes } from '../../routes/routes'
import { Row, Table } from '../Table/Table'
import { columns, UnidadesTableType } from './constants'
import { formatUnidadesForTable } from './formatting'

type ReclamosTableProps = {
  unidades: Unidad[]
}

export const UnidadesTable = ({ unidades }: ReclamosTableProps) => {
  const navigate = useNavigate()
  const tableData = useMemo(() => formatUnidadesForTable(unidades), [unidades])

  const onClickRow = (row: Row<UnidadesTableType>) => {
    navigate(buildRouteParams(routes.unidadesDetail, { id: row.id.data }))
  }

  return <Table columns={columns} data={tableData} onClickRow={onClickRow} />
}
