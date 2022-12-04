import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { PageTitle } from '../PageTitle/PageTitle'

export type PageLayoutProps = {
  title: string
  titleAddon?: React.ReactNode
  rightAddon?: React.ReactNode
  children: React.ReactNode
}

export const PageLayout = ({
  title,
  titleAddon,
  rightAddon,
  children,
}: PageLayoutProps) => {
  return (
    <Flex
      direction="column"
      padding="2rem"
      width="100%"
      height="100%"
      gap="2rem"
    >
      <PageTitle
        title={title}
        titleAddon={titleAddon}
        rightAddon={rightAddon}
      />
      <Box width="100%" height="100%">
        {children}
      </Box>
    </Flex>
  )
}
