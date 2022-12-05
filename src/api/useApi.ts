import { useCallback } from 'react'
import { useQuery, useQueryClient } from 'react-query'

export const useApi = <
  T extends (params: P) => Promise<R>,
  R = Awaited<ReturnType<T>>,
  P = Parameters<T> | undefined
>(
  key: string, // Key to use for react-query
  fetcher: T,
  params?: Partial<P>
): {
  data: R | undefined
  loading: boolean
  errorMessage: string | undefined
  errorType: string | undefined
  refetch: () => Promise<void>
} => {
  const queryClient = useQueryClient()
  const queryKey = [key, params]
  const {
    isLoading: loading,
    error,
    data,
  } = useQuery<R, Error>(queryKey, (ctx) => {
    console.log({ ctx })
    return fetcher(ctx.queryKey[1] as P)
  })

  const refetch = useCallback(() => {
    return queryClient.invalidateQueries(queryKey)
  }, [queryKey, queryClient])

  return {
    data,
    loading,
    errorMessage: error?.message,
    errorType: error?.name,
    refetch,
  }
}
