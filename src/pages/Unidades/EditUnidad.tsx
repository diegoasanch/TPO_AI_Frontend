import { Flex, IconButton, Text, useToast } from '@chakra-ui/react'
import ClearIcon from '@mui/icons-material/Clear'
import { colors } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api/api'
import { useApi } from '../../api/useApi'
import { useApiMutation } from '../../api/useApiMutation'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { Select, SelectItem } from '../../components/Select/Select'
import { formatUsuarioSelectOption } from '../../utils/formatting'

export const EditUnidad = () => {
  const toast = useToast()
  const { id } = useParams<{ id: string }>()
  const removeDuenio = useApiMutation({ fetcher: api.unidades.liberarDuenio })
  const removeInquilino = useApiMutation({
    fetcher: api.unidades.liberarInquilino,
  })

  const [personaOptions, setPersonaOptions] = useState<SelectItem[]>([])
  const [selectedDuenio, setSelectedDuenio] = useState<SelectItem>()

  const [selectedInquilino, setSelectedInquilino] = useState<SelectItem>()

  const unidad = useApi({
    key: 'unidad',
    fetcher: api.unidades.getById,
    params: { id },
  })

  const personas = useApi({
    key: 'personas',
    fetcher: api.personas.getAll,
  })
  const cambiarDuenio = useApiMutation({ fetcher: api.unidades.cambiarDuenio })
  const cambiarInquilino = useApiMutation({ fetcher: api.unidades.alquilar })

  const handleRemoveDuenio = async () => {
    await removeDuenio.mutateAsync({ id: id || '' })
    setSelectedDuenio(undefined)
    await unidad.refetch()
  }

  const handleRemoveInquilino = async () => {
    await removeInquilino.mutateAsync({ id: id || '' })
    setSelectedInquilino(undefined)
    await unidad.refetch()
  }

  const handleSelectDuenio = async (duenio: SelectItem) => {
    try {
      await removeDuenio.mutateAsync({ id: id || '' })
      await cambiarDuenio.mutateAsync({
        id: id || '',
        ownerId: duenio.value,
      })
      await unidad.refetch()
      setSelectedDuenio(duenio)
    } catch (error) {
      toast({
        title: 'No se pudo cambiar el dueño',
        description: `Error: ${
          (error as { message?: string }).message || 'Error desconocido'
        }`,
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const handleSelectInquilino = async (inquilino: SelectItem) => {
    try {
      await removeInquilino.mutateAsync({ id: id || '' })
      await cambiarInquilino.mutateAsync({
        id: id || '',
        renterId: inquilino.value,
      })
      await unidad.refetch()
      setSelectedInquilino(inquilino)
    } catch (error) {
      toast({
        title: 'No se pudo cambiar el inquilino',
        description: `Error: ${
          (error as { message?: string }).message || 'Error desconocido'
        }`,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  // Format persona select options when data is loaded
  useEffect(() => {
    if (personas.data) {
      setPersonaOptions(personas.data.map(formatUsuarioSelectOption))
    } else {
      setPersonaOptions([])
    }
  }, [personas.data])

  // Set selected duenio when unidad data is loaded
  useEffect(() => {
    if (unidad.data) {
      const duenio = personas.data?.find(
        (persona) => persona.documento === unidad.data?.duenio[0]?.documento
      )
      if (duenio) {
        setSelectedDuenio(formatUsuarioSelectOption(duenio))
      }

      const inquilino = personas.data?.find(
        (persona) => persona.documento === unidad.data?.inquilinos[0]?.documento //TODO: render more than one inquilino
      )
      if (inquilino) {
        setSelectedInquilino(formatUsuarioSelectOption(inquilino))
      }
    }
  }, [unidad.data, personas.data])

  return (
    <PageLayout title={`Editar unidad #${id}`}>
      <Flex direction="column" gap="2rem">
        <Flex direction="row" gap="1rem">
          <Text fontWeight="bold" fontSize="lg">
            Dueño
          </Text>
          <Select
            items={personaOptions}
            value={selectedDuenio}
            onChange={handleSelectDuenio}
            loading={removeDuenio.loading}
            ChakraSelectProps={{ width: '40rem' }}
          />
          <IconButton
            disabled={!selectedDuenio}
            color={colors.red[600]}
            aria-label="Quitar dueño"
            icon={<ClearIcon />}
            onClick={handleRemoveDuenio}
          />
        </Flex>

        <Flex direction="row" gap="1rem">
          <Text fontWeight="bold" fontSize="lg">
            Inquilinos
          </Text>
          <Select
            items={personaOptions}
            value={selectedInquilino}
            onChange={handleSelectInquilino}
            loading={removeInquilino.loading}
            ChakraSelectProps={{ width: '40rem' }}
          />
          <IconButton
            disabled={!selectedInquilino}
            color={colors.red[600]}
            aria-label="Quitar inquilino"
            icon={<ClearIcon />}
            onClick={handleRemoveInquilino}
          />
        </Flex>
      </Flex>
    </PageLayout>
  )
}
