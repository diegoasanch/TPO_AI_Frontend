import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { Select } from './Select'
export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState(args.items[0])

  return <Select {...args} value={value} onChange={setValue} />
}

export const Primary = Template.bind({})

const mock_options = [
  {
    value: '1',
    label: 'Option 1',
  },
  {
    value: '2',
    label: 'Option 2',
  },
  {
    value: '3',
    label: 'Option 3',
  },
  {
    value: '4',
    label: 'Option 4 (disabled)',
    disabled: true,
  },
  {
    value: '5',
    label: 'Option 5',
  },
]
Primary.args = {
  items: mock_options,
  loading: false,
  error: false,
}
