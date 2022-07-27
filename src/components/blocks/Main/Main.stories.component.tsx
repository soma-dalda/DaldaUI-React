import styled from '@emotion/styled'
import { useState } from 'react'
import { Main } from '.'
import { LOGO_URL } from '../../../assets'
import { TypoGraphy } from '../../../styles/Typography'
import { Button, FooterDalda, Search } from '../../atoms'
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
    font-size: 2em;
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
  <header
    style={{
      width: '100%',
      position: 'sticky',
      background: '#fff',
      boxShadow: `1px 1px 4px #0000002f`,
      zIndex: '9999',
      top: '0',
      left: '0',
    }}
  >
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
    font-size: 2em;
    font-weight: normal;
  }

  .padding--50 {
    padding-top: 30px;
  }

  b {
    position: relative;
    font-weight: normal;
    padding: 0 10px;

    color: #ffa180;

    &::after {
      position: absolute;
      bottom: 10px;
      left: 10px;
      content: '';
      width: calc(100% - 20px);
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
const Banner = () => (
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
)

const TagContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;

  span {
    padding: 3px;
    font-size: 0.9em;
    color: ${({ theme }) => theme.color.primaryText};
    cursor: pointer;
  }
`

export const MainPrimaryTest = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Main.Column
        style={{
          backgroundColor: '#fff',
          position: 'relative',
        }}
      >
        <Section
          shadow={true}
          style={{
            position: 'relative',
            overflowY: `${visible ? 'hidden' : 'auto'}`,
          }}
        >
          <LeftColumnHeader onClick={() => setVisible((prev) => !prev)} />
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
                margin: '10px 0px',
                marginRight: '5%',
                width: '90%',
              }}
            >
              <Search style={{ boxShadow: '1px 1px 5px #2c2c2c42' }} placeholder="우리동네 케이크를 검색 해보세요" />
            </div>
            <TagContainer>
              <span>#선릉역 케이크</span>
              <span>#강남역</span>
              <span>#신촌</span>
            </TagContainer>
          </div>
          <TagContainer></TagContainer>
          <FooterDalda />
        </Section>
        <BottomSheet defaultHeight="40%" setVisible={setVisible} visible={visible}>
          <div
            style={{
              width: '100%',
              height: '45px',
              display: 'flex',
              borderRadius: '30px 30px 0 0',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0px 1px 4px #0000002f',
            }}
          >
            <div
              style={{
                marginLeft: '20px',
              }}
            >
              메뉴
            </div>
            <BottomSheet.HideButton
              style={{
                backgroundColor: 'transparent',
                border: '0px',
                marginRight: '20px',
                cursor: 'pointer',
                color: '#75afe5c3',
              }}
            >
              취소
            </BottomSheet.HideButton>
          </div>
          <div
            style={{
              height: 'calc(100% - 45px)',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              style={{
                width: '90%',
                height: '40px',
                margin: '10px 5%',
                marginTop: '20px',
              }}
              types="normal"
            >
              손쉽게 로그인 하기
            </Button>
            <Button
              style={{
                width: '90%',
                height: '40px',
                margin: '10px 5%',
              }}
              types="primary"
            >
              케이크 구경 하러가기
            </Button>
            <Button
              style={{
                width: '90%',
                height: '40px',
                margin: '10px 5%',
              }}
              types="normal"
            >
              케이크 업로드 하기
            </Button>
          </div>
        </BottomSheet>
      </Main.Column>
      <Main.Column>
        <Section shadow={false}>
          <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <img style={{ width: '240px', height: 'auto' }} src={LOGO_URL} alt="" />
          </div>
        </Section>
      </Main.Column>
    </>
  )
}
