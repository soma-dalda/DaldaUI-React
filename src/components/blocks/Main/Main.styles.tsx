import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const MainWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoint.maxWidth};
  display: flex;
  min-height: 100vh;
  height: 100%;

  ${({ isMobile }) =>
    isMobile &&
    css`
      justify-content: center;
    `}
`

export const Column = styled.div<{ visible: boolean; isMobile: boolean }>`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoint.width};
  height: 100%;
  min-height: 100vh;

  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}

  ${({ isMobile }) =>
    isMobile &&
    css`
      max-width: 100%;
    `}
`

export const Section = styled.section<{ shadow?: boolean }>`
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: #63636333 0px 2px 8px 0px;
    `}
`
