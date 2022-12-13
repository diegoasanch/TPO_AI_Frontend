import { Context, createContext, ReactNode, useContext } from 'react'

export const buildGenericContext = <T extends object>(
  getData: () => T
): [
  ({ children }: { children: ReactNode }) => JSX.Element,
  () => T,
  Context<T>
] => {
  const Context = createContext<T>({} as T)
  const provider = ({ children }: { children: ReactNode }) => {
    const comonData = getData()

    return <Context.Provider value={comonData}>{children}</Context.Provider>
  }

  const useProviderContext = () => useContext(Context)

  return [provider, useProviderContext, Context]
}
