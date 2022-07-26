import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { BottomSheetProps } from './BottomSheet.type'

const heightAnimation = (height: string) => keyframes`
  0% {
    height: 0px;
  }

  100% {
    height: ${height};
  }
`

export const BottomSheetContainer = styled.div<{ visible: boolean; backgroundVisibile: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoint.width};

  flex-direction: column;
  justify-content: flex-end;

  ${({ backgroundVisibile }) =>
    backgroundVisibile
      ? css`
          background-color: rgba(54, 54, 54, 0.25);
        `
      : css`
          background-color: #ffffff00;
        `};

  transition: background 200ms;
`

export const BottomSheetContents = styled.div<Pick<BottomSheetProps, 'defaultHeight'> & { isContentsVisible: boolean }>`
  position: relative;
  max-width: ${({ theme }) => theme.breakpoint.width};
  width: calc(100% - 20px);
  height: ${({ defaultHeight }) => defaultHeight};
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.bottomSheet};
  padding: 20px 10px;

  ${({ isContentsVisible }) =>
    !isContentsVisible &&
    css`
      height: 0px;
      transition: height 100ms linear;
    `}

  box-shadow: rgba(17, 17, 26, 0.1) 0px -2px 16px;
`

export const BottomSheetContoller = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 4px;
  border-radius: 50px;
  background-color: #696969cb;
  cursor: pointer;
`
