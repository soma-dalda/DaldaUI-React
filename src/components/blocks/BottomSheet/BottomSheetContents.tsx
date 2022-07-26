import { PropsWithChildren, useContext, useEffect } from 'react'
import { BottomSheetContext } from '.'
import { BottomSheetProps, BottomSheetStyledProps } from './BottomSheet.type'
import * as Styled from './BottomSheet.styles'

export const BottomSheetContents = ({
  children,
  defaultHeight,
  delay = 600,
}: PropsWithChildren<Pick<BottomSheetProps, 'defaultHeight'> & BottomSheetStyledProps>) => {
  const { isContentsVisible, hideBackground } = useContext(BottomSheetContext)

  useEffect(() => {
    if (!isContentsVisible) {
      const timer = setTimeout(() => {
        hideBackground()
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isContentsVisible])

  return (
    <Styled.BottomSheetContents delay={delay} isContentsVisible={isContentsVisible} defaultHeight={defaultHeight}>
      {children}
    </Styled.BottomSheetContents>
  )
}
