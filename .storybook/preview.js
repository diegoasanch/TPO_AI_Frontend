import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/roboto'
import { MemoryRouter } from 'react-router-dom'
import { theme } from '../src/theme/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </ChakraProvider>
  ),
]
