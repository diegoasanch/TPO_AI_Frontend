import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { Role } from '../../utils/constants'

export default {
  title: 'Sidebar',
  component: Sidebar,
  argTypes: {
    userRole: {
      control: {
        type: 'radio',
      },
      options: Object.values(Role),
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <div style={{ height: '95vh' }}>
    <Sidebar {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  userRole: Role.ADMIN,
  userName: 'Elon Musk',
}
