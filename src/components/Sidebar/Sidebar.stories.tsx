import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Role } from '../../utils/constants'
import { Sidebar } from './Sidebar'

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
