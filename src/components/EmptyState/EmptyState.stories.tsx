import { ComponentMeta, ComponentStory } from '@storybook/react'
import { EmptyState, EmptyStateType } from './EmptyState'
export default {
  title: 'EmptyState',
  component: EmptyState,
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: Object.values(EmptyStateType),
    },
  },
} as ComponentMeta<typeof EmptyState>

const Template: ComponentStory<typeof EmptyState> = (args) => (
  <EmptyState {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
