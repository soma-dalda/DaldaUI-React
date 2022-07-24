import React, {
  createContext,
  forwardRef,
  MutableRefObject,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useDebouncedCallback } from '../../../hooks/useDebounce'
import { useWindowResize } from '../../../hooks/useWindowResize'
import { breakpoint } from '../../../styles/theme/constant'
import * as Styled from './Main.styles'

type Props = unknown

type MainContextType = {
  columnCount: MutableRefObject<number> | null
  isMobile: boolean
  setIsMobile: (bool: boolean) => void
}

const initialValue: MainContextType = {
  columnCount: null,
  isMobile: false,
  setIsMobile: () => {},
}

const MainContext = createContext(initialValue)

function MainProvider({ children }: PropsWithChildren) {
  const columnCount = useRef(0)
  const [isMobile, setIsMobile] = useState(false)

  return <MainContext.Provider value={{ isMobile, setIsMobile, columnCount }}>{children}</MainContext.Provider>
}

export const Main = ({ children }: PropsWithChildren<Props>) => {
  return (
    <MainProvider>
      <MainContainer>{children}</MainContainer>
    </MainProvider>
  )
}

const MainContainer = ({ children }: PropsWithChildren<Props>) => {
  const { isMobile, setIsMobile } = useContext(MainContext)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  const getWidth = useCallback(() => {
    if (wrapperRef && wrapperRef.current?.offsetWidth) {
      setWidth(wrapperRef.current?.offsetWidth)
    }
  }, [wrapperRef])

  const debouncedGetWidth = useDebouncedCallback(getWidth, 200)

  useWindowResize(debouncedGetWidth)
  useEffect(() => {
    debouncedGetWidth()
  }, [])

  useEffect(() => {
    if (width < breakpoint.num.maxWidth) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width])

  return (
    <Styled.MainContainer>
      <Styled.MainWrapper isMobile={isMobile} ref={wrapperRef}>
        {children}
      </Styled.MainWrapper>
    </Styled.MainContainer>
  )
}

const MainColumn = forwardRef<HTMLDivElement, PropsWithChildren>(({ children }, ref) => {
  const [visible, setVisible] = useState(true)
  const { isMobile, columnCount } = useContext(MainContext)

  useEffect(() => {
    if (columnCount?.current === 1) {
      setVisible(false)
    }
  }, [])

  useEffect(() => {
    if (columnCount && columnCount.current === 0) {
      columnCount.current += 1
      setVisible(true)
    }
  }, [columnCount])

  return (
    <Styled.Column ref={ref} visible={isMobile ? visible : true}>
      {children}
    </Styled.Column>
  )
})

MainColumn.displayName = 'MainColumn'
Main.Column = MainColumn
Main.Section = Styled.Section
