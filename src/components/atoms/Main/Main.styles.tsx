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
  border: 1px solid green;
`
