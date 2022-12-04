import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
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
      id: '0x420',
      name: 'John Doe',
      email: 'test@email.com',
      age: 42,
    },
    {
      id: '0x421',
      name: 'John Doe 2',
      email: 'test@email.com',
      age: 33,
    },
  ],
}
