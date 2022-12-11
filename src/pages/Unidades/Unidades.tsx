import { Box, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { api } from '../../api/api'
import { Edificio } from '../../api/types/edificio'
import { useApi } from '../../api/useApi'
import {
  ActionButton,
  ActionButtonVariant,
} from '../../components/ActionButton'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'
import { LoadingContent } from '../../components/LoadingContent/LoadingContent'
import { PageLayout } from '../../components/PageLayout'
import { Select, SelectItem } from '../../components/Select/Select'
import { UnidadesTable } from '../../components/UnidadesTable/UnidadesTable'

const formatEdificioSelectOption = (edificio: Edificio): SelectItem => ({
  value: String(edificio.codigo),
  label: `${edificio.nombre} - ${edificio.direccion}`,
})

export const UnidadesPage = () => {
  const toast = useToast()
  const [options, setOptions] = useState<SelectItem[]>([])
  const [selectedEdificio, setSelectedEdificio] = useState<SelectItem>()
  const {
    data: edificioData,
    errorMessage: edificioErrorMessage,
    loading: edificioLoading,
    refetch: refetchEdificio,
  } = useApi({ key: 'edificios', fetcher: api.edificios.getEdificios })
  const {
    data: unidadesData,
    errorMessage: unidadesErrorMessage,
    errorType: unidadesErrorType,
    loading: unidadesLoading,
    refetch: refetchUnidades,
  } = useApi({
    key: 'unidades',
    fetcher: api.unidades.getUnidadesByEdificio,
    params: { id: selectedEdificio?.value },
    enabled: !!selectedEdificio,
  })

  // Format select options when data is loaded
  useEffect(() => {
    if (edificioData) {
      setOptions(edificioData.map(formatEdificioSelectOption))
      setSelectedEdificio(undefined)
    } else {
      setOptions([])
    }
  }, [edificioData])

  useEffect(() => {
    if (edificioErrorMessage) {
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
  }, [edificioErrorMessage])

  useEffect(() => {
    if (unidadesErrorMessage) {
      toast({
        title: 'Error',
        description:
          'Ocurrio un error al cargar las unidades. Intente nuevamente.',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [unidadesErrorMessage])

  return (
    <PageLayout
      title="Unidades"
      rightAddon={<ActionButton variant={ActionButtonVariant.create} />}
    >
      <Flex
        direction="column"
        alignItems="start"
        gap="1rem"
        marginBottom="2rem"
      >
        <Text>Seleccione un edificio</Text>
        <Select
          value={selectedEdificio}
          onChange={setSelectedEdificio}
          items={options}
          loading={edificioLoading}
          error={!!edificioErrorMessage}
          onRetry={refetchEdificio}
          ChakraSelectProps={{ width: '30rem' }}
        />
      </Flex>
      {unidadesLoading && <LoadingContent title="Cargando unidades..." />}
      {unidadesData && !unidadesLoading && !unidadesErrorMessage && (
        <Box>
          <Heading size="md" marginBottom="1rem">
            Unidades del edificio {selectedEdificio?.label}
          </Heading>
          <UnidadesTable unidades={unidadesData} />
        </Box>
      )}
      {unidadesErrorMessage && !unidadesLoading && (
        <ErrorBox
          title={unidadesErrorType}
          message={unidadesErrorMessage}
          onRetry={refetchUnidades}
        />
      )}
    </PageLayout>
  )
}
