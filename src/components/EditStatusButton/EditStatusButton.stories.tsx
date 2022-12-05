import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EditStatusButton } from './EditStatusButton'
import { ClaimStatus } from '../../utils/constants'
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
