import React, { useMemo } from 'react'
import { Reclamo } from '../../api/types/reclamos'
import { groupAndFormatReclamosForTable } from './formatting'
import { GroupedTable } from '../GroupedTable/GroupedTable'
import { columns, ReclamosTableType } from './constants'
import { Row } from '../Table/Table'
import { useNavigate } from 'react-router-dom'
import { buildRouteParams } from '../../routes/builder'
import { routes } from '../../routes/routes'

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
