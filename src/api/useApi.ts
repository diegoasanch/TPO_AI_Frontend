import { useBoolean } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { ApiResult } from './client'

export const useApi = <
  T extends (...args: unknown[]) => Promise<unknown>,
  R = Awaited<ReturnType<T>> extends ApiResult<infer U> ? U : never,
  P = Parameters<T>
>(
  fetcher: T,
  params?: P
): {
  data: R | undefined
  errorMessage: string | undefined
  errorType: string | undefined
  loading: boolean
  refetch: () => Promise<void>
} => {
  const [data, setData] = useState<R>()
  const [errorType, setErrorType] = useState<string>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [loading, setLoading] = useBoolean(false)

  const fetchData = useCallback(async () => {
    setLoading.on()
    const result = (await fetcher(params)) as ApiResult<unknown>
    if (!result.isError) {
      setData(result.data as R)
      setErrorMessage(undefined)
      setErrorType(undefined)
    } else {
      setData(undefined)
      setErrorMessage(result.error)
      setErrorType(result.errorType)
    }
    setLoading.off()
  }, [fetcher, params])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, errorMessage, errorType, loading, refetch: fetchData }
}
