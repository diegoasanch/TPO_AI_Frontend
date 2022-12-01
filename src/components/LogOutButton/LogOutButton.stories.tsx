import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LogOutButton } from './LogOutButton'

export default {
  title: 'LogOutButton',
  component: LogOutButton,
} as ComponentMeta<typeof LogOutButton>

const Template: ComponentStory<typeof LogOutButton> = (args) => (
  <LogOutButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
