import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Images } from './Images'
export default {
  title: 'Images',
  component: Images,
} as ComponentMeta<typeof Images>

const Template: ComponentStory<typeof Images> = (args) => <Images {...args} />

export const Primary = Template.bind({})
Primary.args = {
  images: [
    {
      src: 'https://res.cloudinary.com/duveiypiy/image/upload/v1666060674/aovbhqb7glnfzmflif1l.jpg',
      alt: 'image',
    },
    {
      src: 'https://res.cloudinary.com/duveiypiy/image/upload/v1666060674/aovbhqb7glnfzmflif1l.jpg',
      alt: 'image',
    },
    {
      src: 'https://res.cloudinary.com/duveiypiy/image/upload/v1666060674/aovbhqb7glnfzmflif1l.jpg',
      alt: 'image',
    },
    {
      src: 'https://res.cloudinary.com/duveiypiy/image/upload/v1666060674/aovbhqb7glnfzmflif1l.jpg',
      alt: 'image',
    },
    {
      src: 'https://res.cloudinary.com/duveiypiy/image/upload/v1666060674/aovbhqb7glnfzmflif1l.jpg',
      alt: 'image',
    },
    {
      src: 'https://res.cloudinary.com/duveiypiy/image/upload/v1666060674/aovbhqb7glnfzmflif1l.jpg',
      alt: 'image',
    },
  ],
}
