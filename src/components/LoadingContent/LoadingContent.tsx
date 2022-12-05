import React from 'react'
import { Card, Flex, Text, Spinner } from '@chakra-ui/react'
import { colors } from '@mui/material'

export type LoadingContentProps = {
  title?: string
}

export const LoadingContent = ({
  title = 'Cargando...',
}: LoadingContentProps) => {
  return (
    <Card width="100%" bg={colors.blueGrey[100]}>
      <Flex
        direction="column"
        width="100%"
        alignItems="center"
        gap="1rem"
        padding="3rem"
      >
        <Spinner size="xl" />
        <Text size="md">{title}</Text>
      </Flex>
    </Card>
  )
}
