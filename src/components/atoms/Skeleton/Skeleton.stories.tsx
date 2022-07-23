import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Skeleton } from '../index'

export default {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  argTypes: {},
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => {
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
      <Skeleton {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  isSkeletonShow: true,
  width: '200px',
  height: '200px',
  borderRadius: '40px',
}
