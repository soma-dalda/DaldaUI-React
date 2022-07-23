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
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '500px',
          height: '100vh',
          position: 'relative',
        }}
      >
        <GalleryTest />
        <button onClick={() => setShow(true)}>hi</button>

        <BottomSheet {...args} setIsShow={(bool) => setShow(bool)} isShow={show}>
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
