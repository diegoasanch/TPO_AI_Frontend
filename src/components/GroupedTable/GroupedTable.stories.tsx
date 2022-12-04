import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GroupedTable } from './GroupedTable'
export default {
  title: 'GroupedTable',
  component: GroupedTable,
} as ComponentMeta<typeof GroupedTable>

const Template: ComponentStory<typeof GroupedTable> = (args) => (
  <GroupedTable {...args} />
)

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
  groups: [
    {
      title: 'Cool people',
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
    },
    {
      title: 'Good looking people',
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
    },
    {
      title: 'Rockstars',
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
    },
  ],
}
