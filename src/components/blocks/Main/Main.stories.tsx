import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Main } from '../index'
import styled from '@emotion/styled'
import { GalleryTest } from '../Gallery/Gallery.stories'
import { TypoGraphy } from '../../../styles/Typography'
import { LOGO_URL } from '../../../assets/index'
import { BottomSheet } from '../../atoms'

export default {
  title: 'Blocks/Main',
  component: Main,
  argTypes: {},
} as ComponentMeta<typeof Main>

const Section = styled(Main.Section)`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    ${TypoGraphy.Title};
    font-size: 3em;
    line-height: 1.2em;
    margin-top: 10px;
    font-weight: lighter;
  }

  b {
    color: #ffa180;
  }
`

const Template: ComponentStory<typeof Main> = (args) => {
  const [visible, setVisible] = useState(false)

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
      <Main {...args}>
        <Main.Column style={{ backgroundColor: '#fff' }}>
          <Section
            shadow={true}
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflowY: `${visible ? 'hidden' : 'auto'}`,
            }}
          >
            <header style={{ width: '100%', marginTop: '40px' }}>
              <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100%', display: 'flex' }}>
                  <img style={{ width: '120px', height: 'auto' }} src={LOGO_URL} alt="" />
                </div>
                <button
                  onClick={() => setVisible(true)}
                  style={{
                    background: 0,
                    border: 0,
                    width: '40px',
                    cursor: 'pointer',
                    color: '#0C73AC',
                  }}
                >
                  메뉴
                </button>
              </div>
            </header>
            <GalleryTest isMobile={true} />

            <BottomSheet height="80%" setVisible={setVisible} visible={visible}>
              안녕하세요
            </BottomSheet>
          </Section>
        </Main.Column>
        <Main.Column>
          <Section shadow={false}>
            <div>
              <h2>여러분의 특별한 기념일을 달콤하게 장식해줄, </h2>
              <br />
              <h2>
                <div style={{ width: '100%', display: 'flex' }}>
                  <img style={{ width: '200px', height: 'auto' }} src={LOGO_URL} alt="" /> 입니다.
                </div>
              </h2>
            </div>
          </Section>
        </Main.Column>
      </Main>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
