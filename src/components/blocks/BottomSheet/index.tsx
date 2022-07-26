import React, { createContext, PropsWithChildren, useState } from 'react'
import { BottomSheetContextType, BottomSheetProps } from './BottomSheet.type'
import { BottomSheetContainer } from './BottomSheetContainer'
import { BottomSheetHideButton } from './BottomSheetHideButton'

const initialValue: BottomSheetContextType = {
  isContentsVisible: true,
  isBgVisible: true,
  show: () => {},
  hide: () => {},
  showContents: () => {},
  hideBackground: () => {},
  onClickBackGround: () => {},
}

export const BottomSheetContext = createContext(initialValue)

export const BottomSheet = ({
  defaultHeight,
  visible,
  setVisible,
  children,
  background,
  animation,
}: PropsWithChildren<BottomSheetProps>) => {
  const [isContentsVisible, setIsContentsVisible] = useState(false)
  const [isBgVisible, setIsBgVisible] = useState(false)

  const onClickBackGround = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget === e.target) {
      setIsContentsVisible(false)
    }
  }

  const show = () => {
    setIsBgVisible(true)
    setIsContentsVisible(true)
  }

  const hide = () => {
    setIsContentsVisible(false)
  }

  return (
    <BottomSheetContext.Provider
      value={{
        show,
        hide,
        onClickBackGround,
        isContentsVisible,
        isBgVisible,
        showContents: () => setIsContentsVisible(true),
        hideBackground: () => setIsBgVisible(false),
      }}
    >
      <BottomSheetContainer
        setVisible={setVisible}
        visible={visible}
        defaultHeight={defaultHeight}
        background={background}
        animation={animation}
      >
        {children}
      </BottomSheetContainer>
    </BottomSheetContext.Provider>
  )
}

BottomSheet.HideButton = BottomSheetHideButton
