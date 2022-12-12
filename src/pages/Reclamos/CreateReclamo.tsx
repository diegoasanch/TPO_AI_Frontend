import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { api } from '../../api/api'
import { useApi } from '../../api/useApi'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Select, SelectItem } from '../../components/Select/Select'
import {
  formatEdificioSelectOption,
  formatUnidadSelectOption,
} from '../../utils/formatting'

export const CreateReclamo = () => {
  const toast = useToast()

  const [edificioOptions, setEdificioOptions] = useState<SelectItem[]>([])
  const [selectedEdificio, setSelectedEdificio] = useState<SelectItem>()

  const [unidadOptions, setUnidadOptions] = useState<SelectItem[]>([])
  const [selectedUnidad, setSelectedUnidad] = useState<SelectItem>()

  const [zonaComun, setZonaComun] = useState(false)
  const [description, setDescription] = useState('')

  const edificios = useApi({
    key: 'edificios',
    fetcher: api.edificios.getEdificios,
  })
  const unidades = useApi({
    key: 'unidadesByEdificio',
    fetcher: api.unidades.getUnidadesByEdificio,
    params: { id: selectedEdificio?.value },
    enabled: !!selectedEdificio,
  })

  const handleZonaComunChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZonaComun(e.target.checked)
  }

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value)
  }

  // Format edificio select options when data is loaded
  useEffect(() => {
    if (edificios.data) {
      setEdificioOptions(edificios.data.map(formatEdificioSelectOption))
    } else {
      setEdificioOptions([])
    }
    setSelectedEdificio(undefined)
  }, [edificios.data])

  // Format unidades select options when data is loaded
  useEffect(() => {
    if (unidades.data) {
      setUnidadOptions(unidades.data.map(formatUnidadSelectOption))
    } else {
      setUnidadOptions([])
    }
    setSelectedUnidad(undefined)
  }, [unidades.data])

  useEffect(() => {
    const errorModel = edificios.errorMessage
      ? 'los edificios'
      : unidades.errorMessage
      ? 'las unidades'
      : null
    if (errorModel) {
      toast({
        title: 'Error',
        description: `Ocurrio un error al cargar ${errorModel}. Intente nuevamente.`,
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [edificios.errorMessage, unidades.errorMessage])

  return (
    <PageLayout title="Crear Reclamo">
      <form>
        <Flex direction="column" gap="2rem">
          <FormControl>
            <FormLabel>Edificio</FormLabel>
            <Select
              items={edificioOptions}
              onChange={setSelectedEdificio}
              value={selectedEdificio}
              loading={edificios.loading}
              ChakraSelectProps={{ width: '30rem' }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Zona Común?</FormLabel>
            <Checkbox isChecked={zonaComun} onChange={handleZonaComunChange}>
              Es zona común
            </Checkbox>
          </FormControl>
          <FormControl>
            <FormLabel>Unidad</FormLabel>
            <Select
              items={unidadOptions}
              onChange={setSelectedUnidad}
              value={selectedUnidad}
              loading={unidades.loading}
              disabled={!selectedEdificio || zonaComun}
              ChakraSelectProps={{ width: '30rem' }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Descripción</FormLabel>
            <Textarea value={description} onChange={handleDescriptionChange} />
          </FormControl>
        </Flex>
      </form>
    </PageLayout>
  )
}
