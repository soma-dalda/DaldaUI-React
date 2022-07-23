import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Props } from './index'

const animation = (height: string) => keyframes`
  0% {
    height: 0px;
  }

  100% {
    height: ${height};
  }
`

export const BottomSheetContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(54, 54, 54, 0.1);
  max-width: ${({ theme }) => theme.breakpoint.width};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: #63636333 0px 2px 8px 0px;
`

export const BottomSheetContents = styled.div<Pick<Props, 'height'> & { isContentsShow: boolean }>`
  max-width: ${({ theme }) => theme.breakpoint.width};
  width: calc(100% - 20px);
  height: ${({ height }) => height};
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.bottomSheet};
  padding: 20px 10px;
  animation: ${({ height }) => animation(height)} 0.5s linear;
  ${({ isContentsShow }) =>
    !isContentsShow &&
    css`
      height: 0px;
      transition: height 0.5s linear;
    `}
`
