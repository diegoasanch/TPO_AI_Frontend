import React, { useMemo } from 'react'

import { Box, Flex, Heading } from '@chakra-ui/react'
import { Role } from '../../utils/constants'
import { AdminRoutes, UsuarioRoutes } from './sidebarRoutes'
import { SessionButton } from '../SessionButton'
import { SidebarLink } from '../SidebarLink'

export type SidebarProps = {
  userRole: Role
  userName: string
  onSignOut?: () => void
}

export const Sidebar = ({ userRole, userName, onSignOut }: SidebarProps) => {
  const routes = useMemo(() => {
    if (userRole === Role.ADMIN) return AdminRoutes
    return UsuarioRoutes
  }, [userRole])

  return (
    <Flex
      direction="column"
      height="100%"
      width="18rem"
      bg="white"
      padding="1rem"
      paddingTop="1.5rem"
      justifyContent="space-between"
    >
      <Heading as="h1" size="xl">
        Consorcio
      </Heading>

      <Flex direction="column" gap=".5rem">
        {routes.map((route) => (
          <SidebarLink
            key={route.path}
            label={route.name}
            path={route.path}
            Icon={route.Icon}
          />
        ))}
      </Flex>

      <Box>
        <SessionButton userName={userName} onSignOut={onSignOut} />
      </Box>
    </Flex>
  )
}
