import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Main } from '../index'
import styled from '@emotion/styled'
import { GalleryTest } from '../Gallery/Gallery.stories'

export default {
  title: 'Blocks/Main',
  component: Main,
  argTypes: {},
} as ComponentMeta<typeof Main>

const Section = styled(Main.Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`

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
        <Main.Column>
          <Section shadow={true}>
            <GalleryTest isMobile={true} />
          </Section>
        </Main.Column>
        <Main.Column>
          <Main.Section shadow={false}>하이</Main.Section>
        </Main.Column>
      </Main>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
