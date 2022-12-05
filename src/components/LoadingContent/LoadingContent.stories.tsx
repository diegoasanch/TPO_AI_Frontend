import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoadingContent } from './LoadingContent'
export default {
  title: 'LoadingContent',
  component: LoadingContent,
} as ComponentMeta<typeof LoadingContent>

const Template: ComponentStory<typeof LoadingContent> = (args) => (
  <LoadingContent {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Cargando...',
}
