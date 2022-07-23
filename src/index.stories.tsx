import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const Div = ({ children }) => <div>{children}</div>

export default {
  title: 'Block/Test',
  component: Div,
  argTypes: {},
} as ComponentMeta<typeof Div>

const Template: ComponentStory<typeof Div> = () => {
  return (
    <div style={{ width: '400px', height: '400px', position: 'relative' }}>
      <Div>Storybook 테스트</Div>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  message: 'ModalButton Message',
}
