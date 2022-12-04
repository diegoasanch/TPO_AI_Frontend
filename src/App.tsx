import React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/appRouter'
import { theme } from './theme/theme'
import '@fontsource/roboto'

const router = appRouter()

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
