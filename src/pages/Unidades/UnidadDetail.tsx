import { Badge, Flex, Text } from '@chakra-ui/react'
import { colors } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../api/api'
import { useApi } from '../../api/useApi'
import {
  ActionButton,
  ActionButtonVariant,
} from '../../components/ActionButton'
import { EmptyState } from '../../components/EmptyState/EmptyState'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'
import { LoadingContent } from '../../components/LoadingContent/LoadingContent'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { buildRouteParams } from '../../routes/builder'
import { routes } from '../../routes/routes'

export const UnidadDetail = () => {
  const { id } = useParams<{ id: string }>()
  const unidad = useApi({
    key: 'unidad',
    fetcher: api.unidades.getById,
    params: { id },
  })

  return (
    <PageLayout
      title={`Unidad #${id}`}
      rightAddon={
        <Link to={buildRouteParams(routes.unidadesEdit, { id: id || '' })}>
          <ActionButton variant={ActionButtonVariant.edit} />
        </Link>
      }
    >
      <Flex direction="column">
        {unidad.loading && <LoadingContent title="Cargando unidad..." />}
        {!unidad.loading && unidad.errorMessage && (
          <ErrorBox title={unidad.errorType} message={unidad.errorMessage} />
        )}
        {!unidad.loading && !unidad.errorMessage && unidad.data && (
          <Flex direction="column" gap="2rem">
            <Flex direction="row" gap="1rem">
              <Text fontWeight="bold" fontSize="lg">
                Número
              </Text>
              <Text fontSize="lg">{unidad.data.numero}</Text>
            </Flex>

            <Flex direction="row" gap="1rem">
              <Text fontWeight="bold" fontSize="lg">
                Piso
              </Text>
              <Text fontSize="lg">{unidad.data.piso}</Text>
            </Flex>

            <Flex direction="row" gap="1rem">
              <Text fontWeight="bold" fontSize="lg">
                Habitado
              </Text>
              <Badge
                bg={unidad.data.habitado ? colors.blue[100] : colors.grey[300]}
                textTransform="none"
                paddingX="5px"
              >
                {unidad.data.habitado ? 'Si' : 'No'}
              </Badge>
            </Flex>

            <Flex direction="row" gap="1rem">
              <Text fontWeight="bold" fontSize="lg">
                Dueño
              </Text>
              <Text fontSize="lg">
                {unidad.data.duenio[0]?.documento || 'Sin dueño'}
              </Text>
            </Flex>

            <Flex direction="row" gap="1rem">
              <Text fontWeight="bold" fontSize="lg">
                Inquilinos
              </Text>
              <Flex direction="column" gap="0.5rem">
                {unidad.data.inquilinos.length ? (
                  <h1>a</h1>
                ) : (
                  <EmptyState
                    title="No hay inquilinos"
                    description="Esta unidad no tiene ningún inquilino."
                  />
                )}
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </PageLayout>
  )
}
