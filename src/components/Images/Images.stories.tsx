import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Images } from './Images'
export default {
  title: 'Images',
  component: Images,
} as ComponentMeta<typeof Images>

const Template: ComponentStory<typeof Images> = (args) => <Images {...args} />

const mockImages = [
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
]

export const Primary = Template.bind({})
Primary.args = {
  onRemoveImage: undefined,
  images: mockImages,
}

export const RemoveImages = Template.bind({})
RemoveImages.args = {
  onRemoveImage: (src: string) => console.log(`remove image ${src}`),
  images: mockImages,
}

export const WithFirstItem = Template.bind({})
WithFirstItem.args = {
  onRemoveImage: (src: string) => console.log(`remove image ${src}`),
  images: mockImages,
  firstItem: <button>hi</button>,
}
