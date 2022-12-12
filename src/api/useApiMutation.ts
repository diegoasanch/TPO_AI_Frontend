import { useMutation } from 'react-query'

export const useApiMutation = <
  T extends (params: P) => Promise<R>,
  R = Awaited<ReturnType<T>>,
  P = Parameters<T>[0]
>({
  fetcher,
}: {
  fetcher: T
}): {
  data: R | undefined
  loading: boolean
  errorMessage: string | undefined
  errorType: string | undefined
  mutate: (params: P) => void
  mutateAsync: (params: P) => Promise<R>
  reset: () => void
} => {
  const {
    isLoading: loading,
    error,
    data,
    mutate,
    mutateAsync,
    reset,
  } = useMutation<R, Error>(
    (ctx) => {
      return fetcher(ctx as P)
    },
    { retry: false }
  )

  return {
    data,
    loading,
    errorMessage: error?.message,
    errorType: error?.name,
    mutate: mutate as (params: P) => void,
    mutateAsync: mutateAsync as (params: P) => Promise<R>,
    reset,
  }
}
