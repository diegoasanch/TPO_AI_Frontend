import { Flex, Heading } from '@chakra-ui/react'
import { Column, Row, Table } from '../Table/Table'

export type TableGroup<T extends string> = {
  title: string
  data: Row<T>[]
}

export type GroupedTableProps<T extends string> = {
  columns: readonly Column<T>[]
  groups: readonly TableGroup<T>[]
  onClickRow?: (row: Row<T>) => void
}

export const GroupedTable = <T extends string>({
  columns,
  groups,
  onClickRow,
}: GroupedTableProps<T>) => {
  return (
    <Flex direction="column" gap="1.5rem">
      {groups.map((group) => (
        <Flex direction="column" key={group.title} gap=".6rem">
          <Heading size="sm">{group.title}</Heading>
          <Table columns={columns} data={group.data} onClickRow={onClickRow} />
        </Flex>
      ))}
    </Flex>
  )
}
