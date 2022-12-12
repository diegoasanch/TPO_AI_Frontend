import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { ImageSelector, LocalImage } from './ImageSelector'
export default {
  title: 'ImageSelector',
  component: ImageSelector,
} as ComponentMeta<typeof ImageSelector>

const Template: ComponentStory<typeof ImageSelector> = (args) => {
  const [images, setImages] = useState<LocalImage[]>([])

  return <ImageSelector {...args} images={images} setImages={setImages} />
}

export const Primary = Template.bind({})
Primary.args = {}
