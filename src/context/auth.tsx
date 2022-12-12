import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { api } from '../api/api'
import { useApiMutation } from '../api/useApiMutation'
import { buildGenericContext } from './GenericContext'

export const useAuth = () => {
  const toast = useToast()
  const [token, setToken] = useState<string>()
  const loginMutation = useApiMutation({ fetcher: api.personas.login })
  const [loginError, setLoginError] = useState<string>()

  const login = async (
    documento: string,
    password: string
  ): Promise<boolean> => {
    setLoginError('')

    try {
      const result = await loginMutation.mutateAsync({
        id: documento,
        password,
      })
      setToken(result.jwt)
      // TODO: decode token

      toast({
        title: 'Login exitoso',
        description: 'Bienvenido',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top',
      })
      return true
    } catch (error) {
      setLoginError((error as { message?: string }).message || 'Error')
      toast({
        title: 'Error al iniciar sesión',
        description: `Error: ${
          (error as { message?: string }).message || 'Error desconocido'
        }`,
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })

      return false
    }
  }

  return {
    login,
    // logout,
    loginError,
    isLoggedIn: !!token,
  }
}

export const [AuthProvider, useAuthContext] = buildGenericContext(useAuth)
