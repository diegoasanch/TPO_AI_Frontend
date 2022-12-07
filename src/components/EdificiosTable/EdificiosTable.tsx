import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Edificio } from '../../api/types/edificio'
import { buildRouteParams } from '../../routes/builder'
import { routes } from '../../routes/routes'
import { Row, Table } from '../Table/Table'
import { columns, EdificiosTableType } from './constants'
import { formatEdificiosForTable } from './formatting'

type EdificiosTableProps = {
  edificios: Edificio[]
}

export const EdificiosTable = ({ edificios }: EdificiosTableProps) => {
  const navigate = useNavigate()
  const tableData = useMemo(
    () => formatEdificiosForTable(edificios),
    [edificios]
  )

  const onClickRow = (row: Row<EdificiosTableType>) => {
    navigate(buildRouteParams(routes.edificioDetail, { id: row.codigo.data }))
  }

  return <Table columns={columns} data={tableData} onClickRow={onClickRow} />
}
