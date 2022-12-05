import React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/appRouter'
import { theme } from './theme/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import '@fontsource/roboto'
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
