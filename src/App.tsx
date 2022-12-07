import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/roboto'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { appRouter } from './routes/appRouter'
import { theme } from './theme/theme'
const queryClient = new QueryClient()

const router = appRouter()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
