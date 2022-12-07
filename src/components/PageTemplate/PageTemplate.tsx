import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Role } from '../../utils/constants'
import { Sidebar } from '../Sidebar/Sidebar'

export type PageTemplateProps = {
  children: React.ReactNode
  hideSidebar?: boolean
}

export const PageTemplate = ({ children, hideSidebar }: PageTemplateProps) => {
  // TODO: extract constants from login hook
  const userRole = Role.ADMIN
  const userName = 'Elon Musk'
  const onSignOut = () => console.warn('Sign out not implemented!')

  return (
    <Flex direction="row" width="100vw" height="100vh">
      {!hideSidebar && (
        <Sidebar
          userRole={userRole}
          userName={userName}
          onSignOut={onSignOut}
        />
      )}
      <Box flexGrow={1} width="100%" height="100%">
        {children}
      </Box>
    </Flex>
  )
}
