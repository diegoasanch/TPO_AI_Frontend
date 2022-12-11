import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'
import { api } from '../../api/api'
import { useApi } from '../../api/useApi'
import {
  ActionButton,
  ActionButtonVariant,
} from '../../components/ActionButton'
import { EdificiosTable } from '../../components/EdificiosTable/EdificiosTable'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'
import { LoadingContent } from '../../components/LoadingContent/LoadingContent'
import { PageLayout } from '../../components/PageLayout'

export const EdificiosPage = () => {
  const toast = useToast()
  const { data, errorMessage, loading, refetch, errorType } = useApi({
    key: 'edificios',
    fetcher: api.edificios.getEdificios,
  })

  useEffect(() => {
    if (errorMessage) {
      toast({
        title: 'Error',
        description:
          'Ocurrio un error al cargar los edificios. Intente nuevamente.',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [errorMessage])

  return (
    <PageLayout
      title="Edificios"
      rightAddon={<ActionButton variant={ActionButtonVariant.create} />}
    >
      {loading && <LoadingContent title="Buscando edificios..." />}
      {data && !loading && !errorMessage && <EdificiosTable edificios={data} />}
      {errorMessage && !loading && (
        <ErrorBox title={errorType} message={errorMessage} onRetry={refetch} />
      )}
    </PageLayout>
  )
}
