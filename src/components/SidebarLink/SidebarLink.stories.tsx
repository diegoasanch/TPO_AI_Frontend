import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SidebarLink } from './SidebarLink'
import HomeIcon from '@mui/icons-material/Home'

export default {
  title: 'SidebarLink',
  component: SidebarLink,
} as ComponentMeta<typeof SidebarLink>

const Template: ComponentStory<typeof SidebarLink> = (args) => (
  <SidebarLink {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Dashboard',
  Icon: HomeIcon,
  path: '#',
  forceActive: false,
}
