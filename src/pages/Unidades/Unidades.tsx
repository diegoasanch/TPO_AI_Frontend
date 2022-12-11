import { Flex, Text, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { api } from '../../api/api'
import { Edificio } from '../../api/types/edificio'
import { useApi } from '../../api/useApi'
import {
  ActionButton,
  ActionButtonVariant,
} from '../../components/ActionButton'
import { PageLayout } from '../../components/PageLayout'
import { Select, SelectItem } from '../../components/Select/Select'

const formatEdificioSelectOption = (edificio: Edificio): SelectItem => ({
  value: String(edificio.codigo),
  label: `${edificio.nombre} - ${edificio.direccion}`,
})

export const UnidadesPage = () => {
  const toast = useToast()
  const {
    data: edificioData,
    errorMessage: edificioErrorMessage,
    loading: edificioLoading,
    refetch: refetchEdificio,
  } = useApi('edificios', api.edificios.getEdificios)
  const [options, setOptions] = useState<SelectItem[]>([])
  const [selectedEdificio, setSelectedEdificio] = useState<SelectItem>()

  // Format select options when data is loaded
  useEffect(() => {
    if (edificioData) {
      setOptions(edificioData.map(formatEdificioSelectOption))
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

  return (
    <PageLayout
      title="Unidades"
      rightAddon={<ActionButton variant={ActionButtonVariant.create} />}
    >
      <Flex direction="column" alignItems="start" gap="1rem">
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
    </PageLayout>
  )
}
