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
  const userName = 'Elon Musk'

  return (
    <Flex direction="row" width="100vw" height="100vh">
      {!hideSidebar && (
        <Sidebar
          userRole={userRole}
          userName={userName}
          onSignOut={auth.logout}
        />
      )}
      <Box flexGrow={1} width="100%" height="100%">
        {children}
      </Box>
    </Flex>
  )
}
