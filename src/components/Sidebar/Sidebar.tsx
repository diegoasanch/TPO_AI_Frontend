import { useMemo } from 'react'

import { Box, Flex, Heading } from '@chakra-ui/react'
import { LoggedUser } from '../../api/types/usuarios'
import { Role } from '../../utils/constants'
import { SessionButton } from '../SessionButton'
import { SidebarLink } from '../SidebarLink'
import { AdminRoutes, UsuarioRoutes } from './sidebarRoutes'

export type SidebarProps = {
  userRole: Role
  user: LoggedUser
  onSignOut?: () => void
}

export const Sidebar = ({ userRole, user, onSignOut }: SidebarProps) => {
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
        <SessionButton user={user} onSignOut={onSignOut} />
      </Box>
    </Flex>
  )
}
