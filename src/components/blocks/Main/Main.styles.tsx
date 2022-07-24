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
  min-height: 100vh;
  max-width: ${({ theme }) => theme.breakpoint.width};
  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}
`

export const Section = styled.section<{ shadow?: boolean }>`
  width: 100%;
  min-height: 100vh;
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: #63636333 0px 2px 8px 0px;
    `}
`
