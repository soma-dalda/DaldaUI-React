import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Gallery } from '../index'

const shortSrc =
  'https://images.unsplash.com/photo-1658594555053-ff7314462869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'

const longSrc = 'https://i.pinimg.com/originals/b5/df/7c/b5df7c3f59cfc4508ab53ce31cfffe71.jpg'
export default {
  title: 'Blocks/Gallery',
  component: Gallery,
  argTypes: {},
} as ComponentMeta<typeof Gallery>

export const GalleryTest = ({ ...args }) => {
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
