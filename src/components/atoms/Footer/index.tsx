import styled from '@emotion/styled'

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.searchInputBG};
  width: calc(100% - 40px);
  height: fit-content;
  padding: 20px;
`

const Nav = styled.nav`
  width: 100%;
  display: flex;

  .span {
    font-size: 0.7em;
    margin-right: 10px;
    padding-right: 10px;
    font-weight: 500;
    cursor: pointer;
    border-right: 1px solid #727171;
  }
`

const Contents = styled.section`
  margin-top: 10px;
  font-size: 0.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FooterDalda = () => {
  return (
    <Footer>
      <Nav>
        <span className="span">개인정보 처리 방침</span>
        <span className="span">이용약관</span>
        <span className="span">공지사항</span>
      </Nav>
      <Contents>
        <div>상호명 : 달다 프로젝트 | 대표자 : 소프트웨어 마에스트로 웅성웅성 팀</div>
        <div>이메일 : swm.dalda@gmail.com</div>
        <div>
          달다는 케이크 정보 제공자로서, 케이크 정보의 당사자가 아니며, 케이크 정보와 관련된 의무와 책임은 각 점포에게
          있습니다.
        </div>
        <div>© 2022 Dalda All right reserved</div>
      </Contents>
    </Footer>
  )
}
