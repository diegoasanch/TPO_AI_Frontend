import React, { useEffect } from 'react'
import { ActionButton } from '../../components/ActionButton'
import { PageLayout } from '../../components/PageLayout'
import { ActionButtonVariant } from '../../components/ActionButton/ActionButton'
import { useApi } from '../../api/useApi'
import { api } from '../../api/api'
import { useToast } from '@chakra-ui/react'
import { ReclamosTable } from '../../components/ReclamosTable/ReclamosTable'
import { LoadingContent } from '../../components/LoadingContent/LoadingContent'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'

export const ReclamosPage = () => {
  const toast = useToast()
  const { data, errorMessage, loading, refetch, errorType } = useApi(
    'reclamos',
    api.reclamos.getReclamos
  )

  useEffect(() => {
    if (errorMessage) {
      toast({
        title: 'Error',
        description:
          'Ocurrio un error al cargar los reclamos. Intente nuevamente.',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [errorMessage])

  return (
    <PageLayout
      title="Reclamos"
      rightAddon={<ActionButton variant={ActionButtonVariant.create} />}
    >
      {loading && <LoadingContent title="Buscando reclamos..." />}
      {data && !loading && !errorMessage && <ReclamosTable reclamos={data} />}
      {errorMessage && !loading && (
        <ErrorBox title={errorType} message={errorMessage} onRetry={refetch} />
      )}
    </PageLayout>
  )
}
