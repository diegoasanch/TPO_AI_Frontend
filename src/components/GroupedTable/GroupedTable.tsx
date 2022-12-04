import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Column, Row, Table } from '../Table/Table'

type TableGroup<T extends string> = {
  title: string
  data: Row<T>[]
}

export type GroupedTableProps<T extends string> = {
  columns: Column<T>[]
  groups: TableGroup<T>[]
}

export const GroupedTable = <T extends string>({
  columns,
  groups,
}: GroupedTableProps<T>) => {
  return (
    <Flex direction="column" gap="1.5rem">
      {groups.map((group) => (
        <Flex direction="column" key={group.title} gap=".6rem">
          <Heading size="md">{group.title}</Heading>
          <Table columns={columns} data={group.data} />
        </Flex>
      ))}
    </Flex>
  )
}
