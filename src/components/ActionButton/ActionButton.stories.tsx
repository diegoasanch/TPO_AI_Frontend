// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ActionButton, ActionButtonVariant } from './ActionButton'

export default {
  title: 'ActionButton',
  component: ActionButton,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: Object.values(ActionButtonVariant),
    },
  },
} as ComponentMeta<typeof ActionButton>

const Template: ComponentStory<typeof ActionButton> = (args) => (
  <ActionButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  variant: ActionButtonVariant.add,
}
