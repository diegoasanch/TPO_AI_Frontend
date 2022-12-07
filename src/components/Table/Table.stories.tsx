import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Table } from './Table'
export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Primary = Template.bind({})
Primary.args = {
  columns: [
    {
      key: 'id',
      label: 'ID',
    },
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'email',
      label: 'Email',
    },
    {
      key: 'age',
      label: 'Age',
      isNumeric: true,
    },
  ],
  data: [
    {
      id: { data: '0x420' },
      name: { data: 'John Doe' },
      email: { data: 'test@email.com' },
      age: { data: 42 },
    },
    {
      id: { data: '0x421' },
      name: { data: 'John Doe 2' },
      email: { data: 'test@email.com' },
      age: { data: 33 },
    },
  ],
}
