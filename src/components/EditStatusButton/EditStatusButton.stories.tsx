import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ClaimStatus } from '../../utils/constants'
import { EditStatusButton } from './EditStatusButton'
export default {
  title: 'EditStatusButton',
  component: EditStatusButton,
} as ComponentMeta<typeof EditStatusButton>

const Template: ComponentStory<typeof EditStatusButton> = (args) => (
  <EditStatusButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  status: ClaimStatus.ABIERTO,
  loading: false,
}
