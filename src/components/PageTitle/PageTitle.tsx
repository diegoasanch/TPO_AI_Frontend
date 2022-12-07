import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export type PageTitleProps = {
  title: string
  titleAddon?: React.ReactNode
  rightAddon?: React.ReactNode
}

export const PageTitle = ({
  title,
  titleAddon,
  rightAddon,
}: PageTitleProps) => {
  return (
    <Flex direction="row" justifyContent="space-between" alignItems="center">
      <Flex direction="row" alignItems="center" gap="1rem">
        <Heading as="h1">{title}</Heading>
        {titleAddon}
      </Flex>
      <Flex direction="row" alignItems="center" gap=".5rem">
        {rightAddon}
      </Flex>
    </Flex>
  )
}
