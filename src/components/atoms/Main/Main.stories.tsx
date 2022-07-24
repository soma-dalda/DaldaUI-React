import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Main } from '../index'

export default {
  title: 'Atoms/Main',
  component: Main,
  argTypes: {},
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => {
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
      <Main {...args}>
        <Main.Column>하이</Main.Column>
        <Main.Column>하이</Main.Column>
      </Main>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
