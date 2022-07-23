import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Gallery } from '../index'
import { Image } from '../../atoms'

const shortSrc =
  'https://i.ytimg.com/vi/aXTkswSxmQs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjCTJCXnvHyV7fVOinaHDnHwvCgw'

const longSrc = 'https://i.pinimg.com/originals/b5/df/7c/b5df7c3f59cfc4508ab53ce31cfffe71.jpg'
export default {
  title: 'Blocks/Gallery',
  component: Gallery,
  argTypes: {},
} as ComponentMeta<typeof Gallery>

const GalleryTest = ({ ...args }) => {
  return (
    <Gallery {...args}>
      <Gallery.Image href="/" src={shortSrc}>
        <div>Hello</div>
      </Gallery.Image>
      <Gallery.Image src={longSrc}>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </Gallery.Image>
      <Gallery.Image src={shortSrc} />
      <Gallery.Image src={longSrc} />
      <Gallery.Image src={shortSrc} />
      <Gallery.Image src={longSrc} />
      <Gallery.Image src={shortSrc} />
    </Gallery>
  )
}

const Template: ComponentStory<typeof Gallery> = ({ ...args }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <GalleryTest {...args} />
    </div>
  )
}

const ScrollTemplate: ComponentStory<typeof Gallery> = ({ ...args }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '50vh',
          marginBottom: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        아래로 스크롤 하세요
      </div>
      <GalleryTest {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export const ScrollTest = ScrollTemplate.bind({})
ScrollTest.args = {}
