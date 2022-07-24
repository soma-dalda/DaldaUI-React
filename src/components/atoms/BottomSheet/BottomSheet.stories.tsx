import React, { useEffect, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BottomSheet } from '../index'
import { GalleryTest } from '../../blocks/Gallery/Gallery.stories'
import styled from '@emotion/styled'

export default {
  title: 'Atoms/BottomSheet',
  component: BottomSheet,
  argTypes: {},
} as ComponentMeta<typeof BottomSheet>

const HideButton = styled(BottomSheet.HideButton)`
  border: none;
  background-color: transparent;
  font-size: 1.2em;
  float: right;
  cursor: pointer;
  padding-right: 5px;
`

const Template: ComponentStory<typeof BottomSheet> = (args) => {
  const [show, setShow] = useState(false)

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '500px',
          minHeight: '100vh',
          position: 'relative',
          boxShadow: `#63636333 0px 2px 8px 0px`,
        }}
      >
        <GalleryTest />
        <button onClick={() => setShow(true)}>hi</button>

        <BottomSheet {...args} setVisible={(bool) => setShow(bool)} visible={show}>
          <HideButton>&times;</HideButton>
        </BottomSheet>
      </div>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  height: '200px',
  isShow: true,
}

export const NoBackGround = Template.bind({})
NoBackGround.args = {
  height: '200px',
  background: false,
}
