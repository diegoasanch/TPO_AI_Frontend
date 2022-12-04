import React from 'react'

import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Text,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

export type Column<T extends string> = {
  key: T
  label: string
  isNumeric?: boolean
}

export type Row<T extends string> = {
  [key in T]: string | React.ReactNode
}

export type TableProps<T extends string> = {
  columns: Column<T>[]
  data: Row<T>[]
}

export const Table = <T extends string>({ columns, data }: TableProps<T>) => {
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
            <Tr key={`row-${i}`}>
              {columns.map((column) => {
                const cellValue = row[column.key]
                return (
                  <Td key={column.key} isNumeric={column.isNumeric}>
                    {typeof cellValue === 'string' ? (
                      <Text>{cellValue}</Text>
                    ) : (
                      cellValue
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
