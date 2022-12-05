import {
  Text,
  Flex,
  Skeleton,
  Tag,
  useToast,
  Card,
  CardBody,
} from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { PageLayout } from '../../components/PageLayout'
import { useApi } from '../../api/useApi'
import { api } from '../../api/api'

import { EditStatusButton } from '../../components/EditStatusButton/EditStatusButton'
import { ClaimStatus } from '../../utils/constants'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'
import { LoadingContent } from '../../components/LoadingContent/LoadingContent'
import { useApiMutation } from '../../api/useApiMutation'
import { Images } from '../../components/Images/Images'

export const ReclamoDetailPage = () => {
  const toast = useToast()
  const { id: _id } = useParams<{ id: string }>()
  const id = useMemo(() => _id, [_id])
  const reclamo = useApi('reclamo_detail', api.reclamos.getReclamo, {
    id,
  })
  const images = useMemo(() => {
    return (
      reclamo.data?.imagenes.map((image) => ({
        src: image.direccion,
        alt: `Imagen ${image.numero}`,
      })) || []
    )
  }, [reclamo.data?.imagenes])

  const statusChange = useApiMutation(api.reclamos.updateStatus)

  const handleStatusChange = async (status: ClaimStatus) => {
    if (!id || !status) return
    try {
      await statusChange.mutateAsync({ id, status: status })
      reclamo.refetch()
    } catch (error: unknown) {
      toast({
        title: 'Error',
        description: 'Ocurrio un error al cambiar el estado del reclamo',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
      statusChange.reset()
    }
  }

  return (
    <PageLayout
      title={`Reclamo #${id}`}
      rightAddon={
        <Flex alignItems="center" gap="0.5rem">
          <Text fontSize="lg">Estado</Text>
          <Skeleton isLoaded={!reclamo.loading}>
            {reclamo.data?.estado && (
              <EditStatusButton
                status={reclamo.data.estado as ClaimStatus}
                loading={statusChange.loading}
                onChange={handleStatusChange}
              />
            )}
          </Skeleton>
        </Flex>
      }
    >
      {(reclamo.errorMessage || reclamo.errorType) && !reclamo.loading && (
        <ErrorBox
          title={reclamo.errorType || 'Unknown error'}
          message={reclamo.errorMessage}
          onRetry={reclamo.refetch}
        />
      )}
      {reclamo.loading && <LoadingContent title="Cargando reclamo..." />}

      {/* Actual reclamo rendering */}
      {!reclamo.loading && !reclamo.errorMessage && reclamo.data && (
        <Flex direction="column" gap="2rem">
          {/* Edificio */}
          <Flex direction="row" gap="1rem">
            <Text fontWeight="bold" fontSize="lg">
              Edificio
            </Text>
            <Text fontSize="lg">
              {reclamo.data.edificio.nombre} - {reclamo.data.edificio.direccion}{' '}
            </Text>
          </Flex>

          {/* Unidad */}
          <Flex direction="row" gap="1rem">
            <Text fontWeight="bold" fontSize="lg">
              Unidad
            </Text>
            <Text fontSize="lg">
              #{reclamo.data.unidad.numero}, Piso {reclamo.data.unidad.piso}
            </Text>
          </Flex>

          {/* Descripcion */}
          <Flex direction="row" gap="1rem">
            <Text fontWeight="bold" fontSize="lg">
              Descripción
            </Text>
            <Card variant="filled" width="100%">
              <CardBody>
                <Text fontSize="lg">
                  {reclamo.data.descripcion || 'Sin descripción'}
                </Text>
              </CardBody>
            </Card>
          </Flex>

          {/* Imagenes */}
          <Flex direction="row" gap="1rem">
            <Text fontWeight="bold" fontSize="lg">
              Imágenes
            </Text>
            <Images images={images} />
          </Flex>
        </Flex>
      )}
    </PageLayout>
  )
}
