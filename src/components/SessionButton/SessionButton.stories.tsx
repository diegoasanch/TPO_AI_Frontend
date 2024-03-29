import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SessionButton } from './SessionButton'

export default {
  title: 'SessionButton',
  component: SessionButton,
} as ComponentMeta<typeof SessionButton>

const Template: ComponentStory<typeof SessionButton> = (args) => (
  <SessionButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  user: { name: 'Elon Musk', documento: '1234567890' },
}
