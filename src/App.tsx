import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/roboto'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './context/auth'
import { appRouter } from './routes/appRouter'
import { theme } from './theme/theme'
const queryClient = new QueryClient()

const router = appRouter()

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
