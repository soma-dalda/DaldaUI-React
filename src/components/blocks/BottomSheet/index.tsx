import React, { createContext, forwardRef, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { useBottomSheet } from '../../../hooks/useBottomSheet'
import { useBottomSheetHeight } from '../../../hooks/useBottomSheetHeight'
import * as Styled from './BottomSheet.styles'
import { BottomSheetContextType, BottomSheetProps } from './BottomSheet.type'

const initialValue: BottomSheetContextType = {
  isContentsVisible: true,
  isBgVisible: true,
  show: () => {},
  hide: () => {},
  showContents: () => {},
  hideBackground: () => {},
  onClickBackGround: () => {},
}

const BottomSheetContext = createContext(initialValue)

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

const BottomSheetContainer = ({
  visible,
  children,
  defaultHeight,
  setVisible,
  animation = true,
  background = true,
}: PropsWithChildren<BottomSheetProps>) => {
  const [height, setHeight] = useState<string | null>(null)
  const { isBgVisible, onClickBackGround, show, hideBackground, hide } = useContext(BottomSheetContext)
  const { fail, onChange, success } = useBottomSheetHeight(setHeight, defaultHeight)

  const { handleDragEnd, handleTouchEnd, handleTouchMove, handleTouchStart, handleDrag, handleDragStart } =
    useBottomSheet(
      () => {
        hide()
        success()
      },
      onChange,
      fail,
      animation,
    )

  // 백그라운드 Props로 설정을 하지 않으면, 백그라운드 (scrim) off
  useEffect(() => {
    if (!background) {
      hideBackground()
    }
  }, [background])

  useEffect(() => {
    if (visible) {
      show()
      setVisible(true)
    }
  }, [visible])

  useEffect(() => {
    if (!isBgVisible) {
      setVisible(false)
    }
  }, [isBgVisible])

  return (
    <Styled.BottomSheetContainer
      aria-label="bottomsheet"
      tabIndex={0}
      role="dialog"
      draggable={true}
      visible={visible}
      backgroundVisibile={background ? isBgVisible : false}
      onClick={onClickBackGround}
    >
      {isBgVisible && (
        <BottomSheetContents defaultHeight={height ?? defaultHeight}>
          <Styled.BottomSheetContoller
            tabIndex={0}
            draggable={true}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDrag={handleDrag}
            onDragOver={handleDrag}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
          {children}
        </BottomSheetContents>
      )}
    </Styled.BottomSheetContainer>
  )
}

const BottomSheetContents = ({
  children,
  defaultHeight,
}: PropsWithChildren<Pick<BottomSheetProps, 'defaultHeight'>>) => {
  const { isContentsVisible, hideBackground } = useContext(BottomSheetContext)

  useEffect(() => {
    if (!isContentsVisible) {
      const timer = setTimeout(() => {
        hideBackground()
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [isContentsVisible])

  return (
    <Styled.BottomSheetContents isContentsVisible={isContentsVisible} defaultHeight={defaultHeight}>
      {children}
    </Styled.BottomSheetContents>
  )
}

const BottomSheetHideButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ onClick, children, ...props }, ref) => {
    const { hide } = useContext(BottomSheetContext)

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (typeof onClick === 'function') {
        onClick(e)
      }
      hide()
    }

    return (
      <button aria-label="bottomsheet close" onClick={handleButtonClick} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

BottomSheetHideButton.displayName = 'BottomSheetHideButton'

BottomSheet.HideButton = BottomSheetHideButton
