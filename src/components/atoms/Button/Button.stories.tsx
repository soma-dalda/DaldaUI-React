import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../index'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
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
        <div
          style={{
            width: '400px',
            height: '40px',
          }}
        >
          <Button {...args} />
        </div>
      </div>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  types: 'primary',
  children: '케이크 구경 하러가기',
}

export const Normal = Template.bind({})
Normal.args = {
  types: 'normal',
  children: '케이크 구경 하러가기',
}
