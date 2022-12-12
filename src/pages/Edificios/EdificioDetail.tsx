import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import { colors } from '@mui/material'
import { useParams } from 'react-router-dom'
import { api } from '../../api/api'
import { useApi } from '../../api/useApi'
import { EmptyState } from '../../components/EmptyState/EmptyState'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'
import { LoadingContent } from '../../components/LoadingContent/LoadingContent'
import { PageLayout } from '../../components/PageLayout'
import { ReclamosTable } from '../../components/ReclamosTable/ReclamosTable'
import { UnidadesTable } from '../../components/UnidadesTable/UnidadesTable'

export const EdificioDetail = () => {
  const { id } = useParams<{ id: string }>()

  const edificio = useApi({
    key: 'reclamo_detail',
    fetcher: api.edificios.getEdificioById,
    params: { id },
  })

  return (
    <PageLayout
      title={
        `Edificio #${id}` + (edificio.data ? ` - ${edificio.data.nombre}` : '')
      }
    >
      <Flex direction="column" gap="2rem">
        {edificio.loading && (
          <LoadingContent title="Cargando detalles del edificio..." />
        )}
        {edificio.errorMessage && !edificio.loading && (
          <ErrorBox
            title="Error al cargar los detalles del edificio"
            message={edificio.errorMessage}
          />
        )}
        {edificio.data && !edificio.loading && !edificio.errorMessage && (
          <Flex direction="column" gap="2rem">
            <Flex direction="row" gap="1rem">
              <Text fontWeight="bold" fontSize="lg">
                Dirección
              </Text>
              <Text fontSize="lg">{edificio.data.direccion}</Text>
            </Flex>
          </Flex>
        )}

        {id && <EdificioTables id={id} />}
      </Flex>
    </PageLayout>
  )
}

const EdificioTables = ({ id }: { id: string }) => {
  const reclamos = useApi({
    key: 'reclamosByEdificio',
    fetcher: api.reclamos.getReclamosByEdificio,
    params: { id },
  })
  const unidades = useApi({
    key: 'unidadesByEdificio',
    fetcher: api.unidades.getUnidadesByEdificio,
    params: { id },
  })

  return (
    <Flex direction="column" gap="2rem">
      {/* Reclamos */}
      <Card bg={colors.grey['100']}>
        <CardHeader>
          <Heading size="md">
            Reclamos (
            {reclamos.data?.length === undefined ? '...' : reclamos.data.length}
            )
          </Heading>
        </CardHeader>
        <CardBody maxHeight="40vh" overflow="auto">
          {reclamos.loading && (
            <LoadingContent title="Cargando reclamos del edificio..." />
          )}
          {reclamos.errorMessage && !reclamos.loading && (
            <ErrorBox
              title="Error al cargar los reclamos del edificio"
              message={reclamos.errorMessage}
            />
          )}
          {reclamos.data && !reclamos.loading && !reclamos.errorMessage && (
            <Flex direction="column" gap="2rem">
              {reclamos.data.length ? (
                <ReclamosTable reclamos={reclamos.data} />
              ) : (
                <EmptyState description="No existen reclamos para este edificio." />
              )}
            </Flex>
          )}
        </CardBody>
      </Card>

      {/* Unidades */}
      <Card bg={colors.grey['100']}>
        <CardHeader>
          <Heading size="md">
            Unidades (
            {unidades.data?.length === undefined ? '...' : unidades.data.length}
            )
          </Heading>
        </CardHeader>
        <CardBody maxHeight="40vh" overflow="auto">
          {unidades.loading && (
            <LoadingContent title="Cargando unidades del edificio..." />
          )}
          {unidades.errorMessage && !unidades.loading && (
            <ErrorBox
              title="Error al cargar las unidades del edificio"
              message={unidades.errorMessage}
            />
          )}
          {unidades.data && !unidades.loading && !unidades.errorMessage && (
            <Flex direction="column" gap="2rem">
              {unidades.data.length ? (
                <UnidadesTable unidades={unidades.data} />
              ) : (
                <EmptyState description="No existen unidades para este edificio." />
              )}
            </Flex>
          )}
        </CardBody>
      </Card>
    </Flex>
  )
}
