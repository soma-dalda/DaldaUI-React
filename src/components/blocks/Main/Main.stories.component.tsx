import styled from '@emotion/styled'
import { useState } from 'react'
import { Main } from '.'
import { LOGO_URL } from '../../../assets'
import { color } from '../../../styles/theme/constant'
import { TypoGraphy } from '../../../styles/Typography'
import { Search } from '../../atoms'
import { BottomSheet } from '../BottomSheet'
import { GalleryTest } from '../Gallery/Gallery.stories'
import { List } from '../List'

const Section = styled(Main.Section)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .h2 {
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

const RightColumn = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <h2 className="h2">여러분의 특별한 기념일을 달콤하게 장식해줄, </h2>
    <br />
    <h2 className="h2">
      <div style={{ width: '100%', display: 'flex' }}>
        <img style={{ width: '200px', height: 'auto' }} src={LOGO_URL} alt="" /> 입니다.
      </div>
    </h2>
  </div>
)

const LeftColumnHeader = ({ onClick }: { onClick: () => void }) => (
  <header style={{ width: '100%' }}>
    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '100%', display: 'flex' }}>
        <img style={{ width: '120px', height: 'auto' }} src={LOGO_URL} alt="" />
      </div>
      <button
        onClick={onClick}
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
)

export const MainGalleryTest = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
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
          <LeftColumnHeader onClick={() => setVisible(true)} />
          <GalleryTest isMobile={true} />
          <BottomSheet defaultHeight="80%" setVisible={setVisible} visible={visible}>
            안녕하세요
          </BottomSheet>
        </Section>
      </Main.Column>
      <Main.Column>
        <Section
          style={{
            minHeight: '100vh',
            justifyContent: 'center',
          }}
          shadow={false}
        >
          <RightColumn />
        </Section>
      </Main.Column>
    </>
  )
}

const BannerContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-left: 10px;
  .h2 {
    ${TypoGraphy.Title};
    font-size: 3em;
    line-height: 2rem;
    margin-top: 10px;
    font-weight: lighter;
  }

  .padding--50 {
    padding-top: 50px;
  }

  b {
    position: relative;
    font-weight: lighter;

    line-height: 2rem;
    color: #ffa180;

    &::after {
      position: absolute;
      bottom: 10px;
      left: 0;
      content: '';
      width: 100%;
      height: 10px;
      background-color: #7facd960;
    }
  }
`

const MapListsTemplate = ({ src, title, instagram, address }: any) => {
  return (
    <>
      <List.Column>
        <List.Image isLoading={false} src={src} />
        <List.Title>{title}</List.Title>
        <List.Item>
          <a href="./">{instagram}</a>
        </List.Item>
        <List.Item>{address}</List.Item>
      </List.Column>
    </>
  )
}

export const MainPrimaryTest = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Main.Column style={{ backgroundColor: '#fff' }}>
        <Section
          shadow={true}
          style={{
            position: 'relative',
            overflowY: `${visible ? 'hidden' : 'auto'}`,
          }}
        >
          <LeftColumnHeader onClick={() => setVisible(true)} />
          <BannerContainer>
            <h2 className="h2">여러분의 </h2>
            <br />
            <h2 className="h2">특별한 기념일을</h2>
            <br />
            <h2 className="h2"> 달콤하게 장식해줄, </h2>
            <br />
            <h2 className="h2 padding--50">
              우리는
              <b>달다</b>
              입니다
            </h2>
          </BannerContainer>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                margin: '40px 0px',
                marginRight: '5%',
                width: '90%',
              }}
            >
              <Search />
            </div>
            <div
              style={{
                marginRight: '5%',
                width: '90%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  padding: '10px 10px',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <span>결과:45</span>
                <span
                  style={{
                    cursor: 'pointer',
                    color: `${color.primaryText}`,
                  }}
                >
                  더보기
                </span>
              </div>
              <List>
                <MapListsTemplate
                  address="서울특별시 삼성동 3204-2"
                  instagram="instagram.com/cakepop"
                  title="케이크 팝"
                  src="https://i.ytimg.com/vi/aXTkswSxmQs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjCTJCXnvHyV7fVOinaHDnHwvCgw"
                />
                <MapListsTemplate
                  address="서울특별시 삼성동 3204-2"
                  instagram="instagram.com/cakepop"
                  title="케이크 팝"
                  src="https://i.ytimg.com/vi/aXTkswSxmQs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjCTJCXnvHyV7fVOinaHDnHwvCgw"
                />
                <MapListsTemplate
                  address="서울특별시 삼성동 3204-2"
                  instagram="instagram.com/cakepop"
                  title="케이크 팝"
                  src="https://i.ytimg.com/vi/aXTkswSxmQs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjCTJCXnvHyV7fVOinaHDnHwvCgw"
                />
              </List>
            </div>
          </div>

          <BottomSheet defaultHeight="400px" setVisible={setVisible} visible={visible}>
            안녕하세요
          </BottomSheet>
        </Section>
      </Main.Column>
      <Main.Column>
        <Section shadow={false}>
          <RightColumn />
        </Section>
      </Main.Column>
    </>
  )
}
