import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../api/api'
import { useApiMutation } from '../../api/useApiMutation'
import {
  ActionButton,
  ActionButtonVariant,
} from '../../components/ActionButton'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { routes } from '../../routes/routes'

export const CreateUsuario = () => {
  const toast = useToast()
  const navigate = useNavigate()

  const [nombre, setNombre] = useState('')
  const [documento, setDocumento] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const personaCreate = useApiMutation({ fetcher: api.personas.create })

  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value)
  }
  const handleDocumentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocumento(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const handlePasswordConfirmationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirmation(e.target.value)
  }

  const isFormValid =
    nombre &&
    documento &&
    password &&
    passwordConfirmation &&
    password === passwordConfirmation

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isFormValid) return

    const result = await personaCreate.mutateAsync({
      name: nombre,
      id: documento,
      password,
    })

    if (result) {
      toast({
        title: 'Usuario creado',
        description: 'El usuario ha sido creado correctamente',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
      navigate(routes.usuariosView.path)
    } else {
      toast({
        title: 'Error al crear usuario',
        description: 'Ha ocurrido un error al crear el usuario',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  return (
    <PageLayout title="Crear usuario">
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="2rem">
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input value={nombre} onChange={handleNombreChange} width="30rem" />
          </FormControl>
          <FormControl>
            <FormLabel>Documento</FormLabel>
            <Input
              value={documento}
              onChange={handleDocumentoChange}
              width="30rem"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              width="30rem"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirma Contraseña</FormLabel>
            <Input
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
              type="password"
              width="30rem"
            />
            {password !== passwordConfirmation && (
              <FormHelperText color="red.500">
                Las contraseñas no coinciden
              </FormHelperText>
            )}
          </FormControl>

          <ActionButton
            maxWidth="900px"
            variant={ActionButtonVariant.save}
            disabled={personaCreate.loading || !isFormValid}
            isLoading={personaCreate.loading}
            type="submit"
          />
        </Flex>
      </form>
    </PageLayout>
  )
}
