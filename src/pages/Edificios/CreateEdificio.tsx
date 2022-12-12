import { Flex, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../api/api'
import { useApiMutation } from '../../api/useApiMutation'
import {
  ActionButton,
  ActionButtonVariant,
} from '../../components/ActionButton'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { buildRouteParams } from '../../routes/builder'
import { routes } from '../../routes/routes'

export const CreateEdificio = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')

  const edificioCreation = useApiMutation({
    fetcher: api.edificios.createEdificio,
  })

  const isFormValid = nombre && direccion

  const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value)
  }

  const handleDireccionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDireccion(event.target.value)
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!nombre || !direccion) return

    const result = await edificioCreation.mutateAsync({
      name: nombre,
      address: direccion,
    })

    if (result) {
      toast({
        title: 'Edificio creado',
        description: 'El edificio ha sido creado con éxito',
        status: 'success',
        duration: 5000,
        position: 'top',
      })
      navigate(buildRouteParams(routes.edificioDetail, { id: result.codigo }))
    } else {
      toast({
        title: 'Error al crear el edificio',
        description: 'Ha ocurrido un error al crear el edificio',
        status: 'error',
        duration: 5000,
        position: 'top',
      })
    }
  }

  return (
    <PageLayout title="Crear Edificio">
      <form onSubmit={handleFormSubmit}>
        <Flex direction="column" gap="2rem">
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input value={nombre} onChange={handleNombreChange} width="30rem" />
          </FormControl>
          <FormControl>
            <FormLabel>Dirección</FormLabel>
            <Input
              value={direccion}
              onChange={handleDireccionChange}
              width="30rem"
            />
          </FormControl>

          <ActionButton
            maxWidth="900px"
            variant={ActionButtonVariant.save}
            disabled={!isFormValid || edificioCreation.loading}
            isLoading={edificioCreation.loading}
            type="submit"
          />
        </Flex>
      </form>
    </PageLayout>
  )
}
