import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api/api'
import { useApiMutation } from '../api/useApiMutation'
import { useAuthContext } from '../context/auth'
import { routes } from '../routes/routes'

export const Login = () => {
  const navigate = useNavigate()
  const auth = useAuthContext()

  const [documento, setDocumento] = useState('')
  const [password, setPassword] = useState('')

  const isFormValid = documento && password

  const login = useApiMutation({ fetcher: api.personas.login })

  const handleDocumentoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDocumento(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isFormValid) return
    const loggedIn = await auth.login(documento, password)
    if (loggedIn) {
      navigate(routes.reclamosView.path)
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Flex justifyContent="center" alignItems="center">
        <Flex
          direction="column"
          alignItems="center"
          gap="2rem"
          maxWidth="50rem"
          padding="4rem"
        >
          <FormControl>
            <FormLabel>Documento</FormLabel>
            <Input
              type="text"
              value={documento}
              onChange={handleDocumentoChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FormControl>
          <Text color="red.500">{auth.loginError}</Text>

          <Button
            type="submit"
            disabled={!isFormValid}
            isLoading={login.loading}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}
