import { Text, Flex, Skeleton, Tag, useToast } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { PageLayout } from '../../components/PageLayout'
import { useApi } from '../../api/useApi'
import { api } from '../../api/api'
import { camelToTitle } from '../../utils/text'
import { EditStatusButton } from '../../components/EditStatusButton/EditStatusButton'
import { ClaimStatus } from '../../utils/constants'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'
import { LoadingContent } from '../../components/LoadingContent/LoadingContent'
import { useApiMutation } from '../../api/useApiMutation'
import { useEffect } from 'react'

export const ReclamoDetailPage = () => {
  const toast = useToast()
  const { id: _id } = useParams<{ id: string }>()
  const id = useMemo(() => _id, [_id])
  const reclamo = useApi('reclamo_detail', api.reclamos.getReclamo, {
    id,
  })

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
    </PageLayout>
  )
}
