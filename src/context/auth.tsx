import { useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { api } from '../api/api'
import { ApiClient } from '../api/client'
import { useApiMutation } from '../api/useApiMutation'
import { useLocalStorage } from '../utils/localStorage'
import { buildGenericContext } from './GenericContext'

const apiClient = ApiClient.getInstance()

export const useAuth = () => {
  const toast = useToast()
  const [loadingToken, setLoadingToken] = useState(true)
  const [token, setToken] = useLocalStorage<string | undefined>(
    'auth-token',
    undefined
  )
  const [loginError, setLoginError] = useState<string>()

  const loginMutation = useApiMutation({ fetcher: api.personas.login })

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

  const logout = async () => {
    setToken(undefined)
  }

  // Keep API client in sync with token
  useEffect(() => {
    if (token) {
      apiClient.setToken(token)
    } else {
      apiClient.removeToken()
    }
  }, [token])

  return {
    login,
    loginLoading: loginMutation.loading,
    logout,
    loginError,
    isLoggedIn: !!token,
  }
}

export const [AuthProvider, useAuthContext] = buildGenericContext(useAuth)
