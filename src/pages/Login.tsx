import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/auth'
import { routes } from '../routes/routes'

export const Login = () => {
  const navigate = useNavigate()
  const auth = useAuthContext()

  const [documento, setDocumento] = useState('')
  const [password, setPassword] = useState('')

  const isFormValid = documento && password

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
      setTimeout(() => {
        // Allow the context to update
        navigate(routes.reclamosView.path)
      }, 100)
    }
  }

  return (
    <form onSubmit={handleFormSubmit} style={{ width: '100%' }}>
      <Flex justifyContent="center" alignItems="center" width="100%">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="2rem"
          maxWidth="35rem"
          padding="4rem"
          width="100%"
        >
          <Heading>Log In</Heading>
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
            isLoading={auth.loginLoading}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}
