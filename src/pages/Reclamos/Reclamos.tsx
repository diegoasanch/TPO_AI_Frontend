import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'
import { api } from '../../api/api'
import { useApi } from '../../api/useApi'
import { ActionButton } from '../../components/ActionButton'
import { ActionButtonVariant } from '../../components/ActionButton/ActionButton'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'
import { LoadingContent } from '../../components/LoadingContent/LoadingContent'
import { PageLayout } from '../../components/PageLayout'
import { ReclamosTable } from '../../components/ReclamosTable/ReclamosTable'

export const ReclamosPage = () => {
  const toast = useToast()
  const { data, errorMessage, loading, refetch, errorType } = useApi({
    key: 'reclamos',
    fetcher: api.reclamos.getReclamos,
  })

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
