import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Reclamo } from '../../api/types/reclamos'
import { buildRouteParams } from '../../routes/builder'
import { routes } from '../../routes/routes'
import { GroupedTable } from '../GroupedTable/GroupedTable'
import { Row } from '../Table/Table'
import { columns, ReclamosTableType } from './constants'
import { groupAndFormatReclamosForTable } from './formatting'

type ReclamosTableProps = {
  reclamos: Reclamo[]
}

export const ReclamosTable = ({ reclamos }: ReclamosTableProps) => {
  const navigate = useNavigate()
  const tableData = useMemo(
    () => groupAndFormatReclamosForTable(reclamos),
    [reclamos]
  )

  const onClickRow = (row: Row<ReclamosTableType>) => {
    navigate(buildRouteParams(routes.reclamosDetail, { id: row.id.data }))
  }

  return (
    <GroupedTable
      columns={columns}
      groups={tableData}
      onClickRow={onClickRow}
    />
  )
}
