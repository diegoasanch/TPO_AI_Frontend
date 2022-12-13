import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import FeedbackIcon from '@mui/icons-material/Feedback'
import { colors } from '@mui/material'

export enum EmptyStateType {
  DEFAULT = 'DEFAULT',
  NO_RESULTS = 'NO_RESULTS',
}

export type EmptyStateProps = {
  title?: string
  description?: string
  type?: EmptyStateType
}

const DEFAULT_DESCRIPTION: Record<EmptyStateType, string> = {
  [EmptyStateType.DEFAULT]: 'Seleccione una opción',
  [EmptyStateType.NO_RESULTS]:
    'No se encontraron resultados para la búsqueda actual',
}

export const EmptyState = ({
  title = 'No hay resultados',
  description,
  type = EmptyStateType.DEFAULT,
}: EmptyStateProps) => {
  const displayDescription = description || DEFAULT_DESCRIPTION[type]

  return (
    <Card bg={colors.grey[100]}>
      <CardHeader>
        <Flex alignItems="top" gap=".2rem">
          <FeedbackIcon color="inherit" />
          <Heading size="md">{title}</Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{displayDescription}</Text>
      </CardBody>
    </Card>
  )
}
