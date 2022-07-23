import React, { createContext, forwardRef, PropsWithChildren, useContext, useEffect, useState } from 'react'
import * as Styled from './BottomSheet.styles'

type InitialValue = {
  isContentsShow: boolean
  isBgShow: boolean
  show: () => void
  hide: () => void
  onClickBackGround: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  showContents: () => void
  hideBackground: () => void
}

const initialValue: InitialValue = {
  isContentsShow: true,
  isBgShow: true,
  show: () => {},
  hide: () => {},
  showContents: () => {},
  hideBackground: () => {},
  onClickBackGround: () => {},
}

const BottomSheetContext = createContext(initialValue)

const BottomSheetProvider = ({ children }: PropsWithChildren) => {
  const [isContentsShow, setIsContentsShow] = useState(false)
  const [isBgShow, setIsBgShow] = useState(false)

  const onClickBackGround = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget === e.target) {
      setIsContentsShow(false)
    }
  }

  const show = () => {
    setIsBgShow(true)
    setIsContentsShow(true)
  }

  const hide = () => {
    setIsContentsShow(false)
  }

  return (
    <BottomSheetContext.Provider
      value={{
        show,
        hide,
        onClickBackGround,
        isContentsShow,
        isBgShow,
        showContents: () => setIsContentsShow(true),
        hideBackground: () => setIsBgShow(false),
      }}
    >
      {children}
    </BottomSheetContext.Provider>
  )
}

export type Props = {
  height: string
  isShow: boolean
  setIsShow: (bool: boolean) => void
}

export const BottomSheet = ({ height, isShow, setIsShow, children }: PropsWithChildren<Props>) => {
  return (
    <BottomSheetProvider>
      <BottomSheetContainer setIsShow={setIsShow} isShow={isShow} height={height}>
        {children}
      </BottomSheetContainer>
    </BottomSheetProvider>
  )
}

const BottomSheetContainer = ({ isShow, children, height, setIsShow }: PropsWithChildren<Props>) => {
  const { isBgShow, onClickBackGround, show } = useContext(BottomSheetContext)

  useEffect(() => {
    if (isShow) {
      show()
      setIsShow(true)
    }
  }, [isShow])

  useEffect(() => {
    if (!isBgShow) {
      setIsShow(false)
    }
  }, [isBgShow])

  if (!isShow) {
    return <></>
  }

  return (
    <Styled.BottomSheetContainer onClick={onClickBackGround}>
      {isBgShow && <BottomSheetContents height={height}>{children}</BottomSheetContents>}
    </Styled.BottomSheetContainer>
  )
}

const BottomSheetContents = ({ children, height }: PropsWithChildren<Pick<Props, 'height'>>) => {
  const { isContentsShow, hideBackground } = useContext(BottomSheetContext)

  useEffect(() => {
    if (!isContentsShow) {
      const timer = setTimeout(() => {
        hideBackground()
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isContentsShow])

  return (
    <Styled.BottomSheetContents isContentsShow={isContentsShow} height={height}>
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
      <button onClick={handleButtonClick} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

BottomSheetHideButton.displayName = 'BottomSheetHideButton'

BottomSheet.HideButton = BottomSheetHideButton
