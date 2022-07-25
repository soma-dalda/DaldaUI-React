import React, { createContext, forwardRef, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { useBottomSheet } from '../../../hooks/useBottomSheet'
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

const BottomSheetProvider = ({ children }: PropsWithChildren) => {
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
      {children}
    </BottomSheetContext.Provider>
  )
}

export const BottomSheet = ({
  height,
  visible,
  setVisible,
  children,
  background,
}: PropsWithChildren<BottomSheetProps>) => {
  return (
    <BottomSheetProvider>
      <BottomSheetContainer setVisible={setVisible} visible={visible} height={height} background={background}>
        {children}
      </BottomSheetContainer>
    </BottomSheetProvider>
  )
}

const BottomSheetContainer = ({
  visible,
  children,
  height,
  setVisible,
  background = true,
}: PropsWithChildren<BottomSheetProps>) => {
  const { isBgVisible, onClickBackGround, show, hideBackground, hide } = useContext(BottomSheetContext)
  const { handleDragEnd, handleTouchEnd, handleTouchMove, handleTouchStart, handleDrag, handleDragStart } =
    useBottomSheet(hide)

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
      onDrag={handleDrag}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      visible={visible}
      backgroundVisibile={background ? isBgVisible : false}
      onClick={onClickBackGround}
    >
      {isBgVisible && <BottomSheetContents height={height}>{children}</BottomSheetContents>}
    </Styled.BottomSheetContainer>
  )
}

const BottomSheetContents = ({ children, height }: PropsWithChildren<Pick<BottomSheetProps, 'height'>>) => {
  const { isContentsVisible, hideBackground } = useContext(BottomSheetContext)

  useEffect(() => {
    if (!isContentsVisible) {
      const timer = setTimeout(() => {
        hideBackground()
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [isContentsVisible])

  return (
    <Styled.BottomSheetContents isContentsVisible={isContentsVisible} height={height}>
      <Styled.BottomSheetContoller
        tabIndex={0}
        onDrag={() => {
          console.log('hi')
        }}
      />
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
      <button aria-label="bottomsheet close button" onClick={handleButtonClick} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

BottomSheetHideButton.displayName = 'BottomSheetHideButton'

BottomSheet.HideButton = BottomSheetHideButton
