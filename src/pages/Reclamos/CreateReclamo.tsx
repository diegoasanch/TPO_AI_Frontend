import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import { api } from '../../api/api'
import { useApi } from '../../api/useApi'
import { useApiMutation } from '../../api/useApiMutation'
import {
  ActionButton,
  ActionButtonVariant,
} from '../../components/ActionButton/ActionButton'
import {
  ImageSelector,
  LocalImage,
} from '../../components/ImageSelector/ImageSelector'
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
  const [selectedUnidad, setSelectedUnidad] = useState<SelectItem | null>(null)
  const [lugar, setLugar] = useState('')

  const [zonaComun, setZonaComun] = useState(false)
  const [description, setDescription] = useState('')

  const [images, setImages] = useState<LocalImage[]>([])

  const reclamoUpload = useApiMutation({ fetcher: api.reclamos.createReclamo })
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

  const isReclamoValid = useMemo(() => {
    // Validate fields have expected values
    return (
      !!selectedEdificio &&
      !!description &&
      ((zonaComun && !!lugar) || (!zonaComun && !!selectedUnidad))
    )
  }, [selectedEdificio, selectedUnidad, zonaComun, description, lugar])

  const handleZonaComunChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZonaComun(e.target.checked)
    setSelectedUnidad(null)
    setLugar('')
  }

  const handleLugarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLugar(e.target.value)
  }

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value)
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isReclamoValid) return

    const result = await reclamoUpload.mutateAsync({
      edificioId: selectedEdificio?.value || '',
      unidadId: selectedUnidad?.value,
      descripcion: description,
      location: lugar,
      creatorId: '0x42069', // TODO: use documento from LoginContext
    })

    console.log({ result })

    if (result) {
      toast({
        title: 'Reclamo creado',
        description: 'El reclamo fue creado con éxito.',
        status: 'success',
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
    setSelectedUnidad(null)
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
      <form onSubmit={handleFormSubmit}>
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
            {zonaComun ? (
              <>
                <FormLabel>Lugar del desperfecto</FormLabel>
                <Input
                  value={lugar}
                  onChange={handleLugarChange}
                  disabled={!selectedEdificio || !zonaComun}
                  width="30rem"
                />
              </>
            ) : (
              <>
                <FormLabel>Unidad</FormLabel>
                <Select
                  items={unidadOptions}
                  onChange={setSelectedUnidad}
                  value={selectedUnidad}
                  loading={unidades.loading}
                  disabled={!selectedEdificio || zonaComun}
                  ChakraSelectProps={{ width: '30rem' }}
                />
              </>
            )}
          </FormControl>

          <FormControl>
            <FormLabel>Descripción</FormLabel>
            <Textarea
              maxWidth="900px"
              value={description}
              onChange={handleDescriptionChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Imágenes</FormLabel>
            <ImageSelector images={images} setImages={setImages} />
          </FormControl>

          <ActionButton
            maxWidth="900px"
            variant={ActionButtonVariant.save}
            disabled={!isReclamoValid || reclamoUpload.loading}
            isLoading={reclamoUpload.loading}
            type="submit"
          />
        </Flex>
      </form>
    </PageLayout>
  )
}
