import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
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
      height="100vh"
      gap="2rem"
      overflowY="scroll"
    >
      <PageTitle
        title={title}
        titleAddon={titleAddon}
        rightAddon={rightAddon}
      />
      <Box width="100%" height="100%" marginBottom="120px">
        {children}
      </Box>
    </Flex>
  )
}
