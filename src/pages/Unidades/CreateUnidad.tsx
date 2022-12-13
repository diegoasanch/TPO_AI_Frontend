import { Flex, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../api/api'
import { useApi } from '../../api/useApi'
import { useApiMutation } from '../../api/useApiMutation'
import {
  ActionButton,
  ActionButtonVariant,
} from '../../components/ActionButton'
import { PageLayout } from '../../components/PageLayout'
import { Select, SelectItem } from '../../components/Select/Select'
import { buildRouteParams } from '../../routes/builder'
import { routes } from '../../routes/routes'
import {
  formatEdificioSelectOption,
  formatUsuarioSelectOption,
} from '../../utils/formatting'

export const CreateUnidad = () => {
  const toast = useToast()
  const navigate = useNavigate()

  const [piso, setPiso] = useState('')
  const [numero, setNumero] = useState('')
  const [edificioOptions, setEdificioOptions] = useState<SelectItem[]>([])
  const [selectedEdificio, setSelectedEdificio] = useState<SelectItem>()

  const [duenioOptions, setDuenioOptions] = useState<SelectItem[]>([])
  const [selectedDuenio, setSelectedDuenio] = useState<SelectItem>()

  const isFormValid = piso && numero && selectedEdificio && selectedDuenio

  const edificios = useApi({
    key: 'edificios',
    fetcher: api.edificios.getEdificios,
  })

  const personas = useApi({
    key: 'personas',
    fetcher: api.personas.getAll,
  })

  const unidadCreate = useApiMutation({ fetcher: api.unidades.createUnidad })

  const handlePisoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPiso(event.target.value)
  }

  const handleNumeroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumero(event.target.value)
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isFormValid) return

    const result = await unidadCreate.mutateAsync({
      buildingId: selectedEdificio?.value || '',
      ownerId: selectedDuenio?.value || '',
      floor: piso,
      number: numero,
    })

    if (result) {
      toast({
        title: 'Unidad creada',
        description: 'La unidad fue creada con éxito',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
      navigate(buildRouteParams(routes.unidadesDetail, { id: result.id }))
    } else {
      toast({
        title: 'Error',
        description: 'Ocurrio un error al crear la unidad. Intente nuevamente.',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  // Format edificio select options when data is loaded
  useEffect(() => {
    if (edificios.data) {
      setEdificioOptions(edificios.data.map(formatEdificioSelectOption))
      setSelectedEdificio(undefined)
    } else {
      setEdificioOptions([])
    }
  }, [edificios.data])

  // Format persona select options when data is loaded
  useEffect(() => {
    if (personas.data) {
      setDuenioOptions(personas.data.map(formatUsuarioSelectOption))
      setSelectedDuenio(undefined)
    } else {
      setDuenioOptions([])
    }
  }, [personas.data])

  useEffect(() => {
    if (edificios.errorMessage) {
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
  }, [edificios.errorMessage])

  return (
    <PageLayout title="Crear Unidad">
      <form onSubmit={handleFormSubmit}>
        <Flex direction="column" gap="2rem">
          <FormControl>
            <FormLabel>Edificio</FormLabel>
            <Select
              value={selectedEdificio}
              onChange={setSelectedEdificio}
              items={edificioOptions}
              loading={edificios.loading}
              error={!!edificios.errorMessage}
              onRetry={edificios.refetch}
              ChakraSelectProps={{ width: '30rem' }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Piso</FormLabel>
            <Input value={piso} onChange={handlePisoChange} width="30rem" />
          </FormControl>
          <FormControl>
            <FormLabel>Número</FormLabel>
            <Input value={numero} onChange={handleNumeroChange} width="30rem" />
          </FormControl>
          <FormControl>
            <FormLabel>Dueño</FormLabel>
            <Select
              value={selectedDuenio}
              onChange={setSelectedDuenio}
              items={duenioOptions}
              loading={personas.loading}
              error={!!personas.errorMessage}
              onRetry={personas.refetch}
              ChakraSelectProps={{ width: '30rem' }}
            />
          </FormControl>

          <ActionButton
            maxWidth="900px"
            variant={ActionButtonVariant.save}
            disabled={unidadCreate.loading || !isFormValid}
            isLoading={unidadCreate.loading}
            type="submit"
          />
        </Flex>
      </form>
    </PageLayout>
  )
}
