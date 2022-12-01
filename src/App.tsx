import React from 'react'
import './App.css'
import { ActionButton } from './components/ActionButton'
import { TestCounter } from './components/TestCounter'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <h1>TPO Aplicaciones Interactivas - UADE 2022</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <TestCounter />
          <ActionButton variant="add" />
        </header>
      </div>
    </ChakraProvider>
  )
}

export default App
