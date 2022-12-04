import { Flex, Text } from '@chakra-ui/react'
import { SvgIconComponent } from '@mui/icons-material'
import { colors } from '@mui/material'
import React from 'react'
import { Link, useMatch } from 'react-router-dom'

export type SidebarLinkProps = {
  label: string
  Icon: SvgIconComponent
  path: string
  forceActive?: boolean // Only for Storybook
}

const LinkColors = {
  normal: colors.grey[600],
  active: colors.grey[800],
  hover: colors.grey[700],
} as const

export const SidebarLink = ({
  forceActive,
  Icon,
  label,
  path,
}: SidebarLinkProps) => {
  const routeMatches = !!useMatch(path)
  const isActive = forceActive ?? routeMatches

  return (
    <Link to={path}>
      <Flex
        alignItems="center"
        gap="5px"
        color={isActive ? LinkColors.active : LinkColors.normal}
        _hover={{
          color: LinkColors.hover,
        }}
        role="group"
      >
        <Icon
          sx={{
            fontSize: '1.5rem',
            color: 'inherit',
          }}
        />
        <Text
          fontSize="xl"
          color="inherit"
          fontWeight={isActive ? 'bold' : 'normal'}
          _groupHover={{
            textDecoration: 'underline',
          }}
        >
          {label}
        </Text>
      </Flex>
    </Link>
  )
}
