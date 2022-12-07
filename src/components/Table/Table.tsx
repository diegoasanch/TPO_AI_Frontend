import React from 'react'

import {
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { colors } from '@mui/material'

export type Column<T extends string> = {
  key: T
  label: string
  isNumeric?: boolean
}

export type Row<T extends string> = {
  [key in T]: {
    data: string | number
    component?: React.ReactNode
  }
}

export type TableProps<T extends string> = {
  columns: readonly Column<T>[]
  data: readonly Row<T>[]
  onClickRow?: (row: Row<T>) => void
}

export const Table = <T extends string>({
  columns,
  data,
  onClickRow,
}: TableProps<T>) => {
  return (
    <TableContainer>
      <ChakraTable variant="simple">
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column.key} isNumeric={column.isNumeric}>
                {column.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, i) => (
            <Tr
              key={`row-${i}`}
              _hover={
                onClickRow
                  ? { bg: colors.grey[100], cursor: 'pointer' }
                  : undefined
              }
              onClick={() => onClickRow?.(row)}
            >
              {columns.map((column) => {
                const cellValue = row[column.key]
                return (
                  <Td key={column.key} isNumeric={column.isNumeric}>
                    {cellValue.component ? (
                      cellValue.component
                    ) : (
                      <Text>{cellValue.data}</Text>
                    )}
                  </Td>
                )
              })}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  )
}
