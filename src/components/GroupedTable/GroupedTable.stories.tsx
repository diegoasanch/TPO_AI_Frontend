import { ComponentMeta, ComponentStory } from '@storybook/react'
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
    },
    {
      title: 'Good looking people',
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
    },
    {
      title: 'Rockstars',
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
    },
  ],
}
