import { Heading } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ActionButton, ActionButtonVariant } from '../ActionButton/ActionButton'
import { PageTitle } from './PageTitle'
export default {
  title: 'PageTitle',
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Reclamos',
}

export const WithTitleAddon = Template.bind({})
WithTitleAddon.args = {
  title: 'Reclamo',
  titleAddon: <Heading size="xl">#123</Heading>,
}

export const WithRightAddon = Template.bind({})
WithRightAddon.args = {
  title: 'Reclamos',
  rightAddon: (
    <>
      <ActionButton variant={ActionButtonVariant.add} />
      <ActionButton variant={ActionButtonVariant.create} />
    </>
  ),
}
