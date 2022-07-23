import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Image } from '../index'

export default {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {},
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '450px',
        }}
      >
        <Image {...args} />
      </div>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  isLoading: false,
  src: 'https://i.ytimg.com/vi/aXTkswSxmQs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjCTJCXnvHyV7fVOinaHDnHwvCgw',
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
  height: 'auto',
  src: 'https://i.ytimg.com/vi/aXTkswSxmQs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjCTJCXnvHyV7fVOinaHDnHwvCgw',
}
