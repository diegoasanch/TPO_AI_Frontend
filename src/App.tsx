import React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/appRouter'

const router = appRouter()

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
