import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { BottomSheetProps, BottomSheetStyledProps } from './BottomSheet.type'

const popup = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`

const popdown = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100%);
  }
`

export const BottomSheetContainer = styled.div<{ visible: boolean; backgroundVisibile: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => (theme.isMobile ? '100%' : theme.breakpoint.width)};

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

export const BottomSheetContents = styled.div<Pick<BottomSheetProps, 'defaultHeight'> & BottomSheetStyledProps>`
  position: absolute;
  width: 100%;
  bottom: 0;
  max-width: ${({ theme }) => (theme.isMobile ? '100%' : theme.breakpoint.width)};
  height: ${({ defaultHeight }) => defaultHeight};
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.bottomSheet};
  animation: ${({ isContentsVisible }) => (isContentsVisible ? popup : popdown)} ${({ delay }) => delay}ms;
  box-shadow: rgba(17, 17, 26, 0.1) 0px -2px 16px;
  z-index: 9999;
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
