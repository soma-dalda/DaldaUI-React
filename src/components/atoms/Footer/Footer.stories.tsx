import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Footer, FooterDalda } from '../index'

export default {
  title: 'Atoms/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => {
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
          <FooterDalda {...args} />
        </div>
      </div>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
