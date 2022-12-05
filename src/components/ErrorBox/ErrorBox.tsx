import React from 'react'
import { Card, Flex, Text, Heading, Button } from '@chakra-ui/react'
import { colors } from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error'
import ReplayIcon from '@mui/icons-material/Replay'

export type ErrorBoxProps = {
  title?: string
  message?: string
  onRetry?: () => void
}

export const ErrorBox = ({
  title = 'Ocurrió un error',
  message,
  onRetry,
}: ErrorBoxProps) => {
  return (
    <Card width="100%" maxWidth="100%" bg={colors.red[300]}>
      <Flex direction="column" alignItems="start" gap="1rem" padding="1rem">
        <Flex alignItems="center" color="white" gap=".5rem">
          <ErrorIcon color="inherit" />
          <Heading size="md" color="inherit">
            {title}
          </Heading>
        </Flex>

        {message && (
          <Card
            bg={colors.red[100]}
            maxWidth="100%"
            maxHeight="25rem"
            width="100%"
            overflow="auto"
          >
            <Text size="md" padding="1rem" as="kbd" overflowWrap="break-word">
              {message}
            </Text>
          </Card>
        )}

        {onRetry && (
          <Button onClick={onRetry} leftIcon={<ReplayIcon fontSize="small" />}>
            <Text>Reintentar</Text>
          </Button>
        )}
      </Flex>
    </Card>
  )
}
