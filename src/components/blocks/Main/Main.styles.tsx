import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const MainWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoint.maxWidth};
  display: flex;

  ${({ isMobile }) =>
    isMobile &&
    css`
      justify-content: center;
    `}
`

export const Column = styled.div<{ visible: boolean }>`
  width: 100%;
  height: fit-content;
  max-width: ${({ theme }) => theme.breakpoint.width};

  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}
`

export const Section = styled.section<{ shadow?: boolean }>`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: #63636333 0px 2px 8px 0px;
    `}
`
