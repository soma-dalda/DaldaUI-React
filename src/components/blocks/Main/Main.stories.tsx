import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Main } from '../index'
import { MainGalleryTest, MainPrimaryTest } from './Main.stories.component'

export default {
  title: 'Blocks/Main',
  component: Main,
  argTypes: {},
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
        backgroundColor: '#FFF1E3',
      }}
    >
      <Main {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  children: <MainPrimaryTest />,
}

export const Gallery = Template.bind({})
Gallery.args = {
  children: <MainGalleryTest />,
}
