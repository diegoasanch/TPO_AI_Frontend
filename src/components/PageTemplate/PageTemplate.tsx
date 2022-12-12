import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useAuthContext } from '../../context/auth'
import { Role } from '../../utils/constants'
import { Sidebar } from '../Sidebar/Sidebar'

export type PageTemplateProps = {
  children: React.ReactNode
  hideSidebar?: boolean
}

export const PageTemplate = ({ children, hideSidebar }: PageTemplateProps) => {
  const auth = useAuthContext()
  const userRole = Role.ADMIN

  return (
    <Flex direction="row" width="100vw" height="100vh">
      {!hideSidebar && (
        <Sidebar
          userRole={userRole}
          user={
            auth.loggedUser || { name: 'cargando...', documento: 'cargando...' }
          }
          onSignOut={auth.logout}
        />
      )}
      <Box flexGrow={1} width="100%" height="100%">
        {children}
      </Box>
    </Flex>
  )
}
