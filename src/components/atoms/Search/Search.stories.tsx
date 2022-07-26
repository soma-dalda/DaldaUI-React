import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Search } from '../index'

export default {
  title: 'Atoms/Search',
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args) => {
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
        <Search {...args} />
      </div>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  placeholder: '선릉역 케이크',
}

export const Loading = Template.bind({})
Loading.args = {}
