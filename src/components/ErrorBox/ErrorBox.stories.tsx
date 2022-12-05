import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ErrorBox } from './ErrorBox'
export default {
  title: 'ErrorBox',
  component: ErrorBox,
} as ComponentMeta<typeof ErrorBox>

const Template: ComponentStory<typeof ErrorBox> = (args) => (
  <ErrorBox {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Network error',
  message:
    'There was an error connecting to the server. Please try again later.',
}
