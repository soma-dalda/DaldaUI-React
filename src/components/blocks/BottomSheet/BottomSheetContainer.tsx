import { PropsWithChildren, useState, useContext, useEffect } from 'react'
import { useBottomSheet } from '../../../hooks/useBottomSheet'
import { useBottomSheetHeight } from '../../../hooks/useBottomSheetHeight'
import { BottomSheetContents } from './BottomSheetContents'
import { BottomSheetProps } from './BottomSheet.type'
import { BottomSheetContext } from './index'
import * as Styled from './BottomSheet.styles'

export const BottomSheetContainer = ({
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

  const { handleTouchEnd, handleTouchMove, handleTouchStart } = useBottomSheet(
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
      draggable={false}
      visible={visible}
      backgroundVisibile={background ? isBgVisible : false}
      onClick={onClickBackGround}
    >
      {isBgVisible && (
        <BottomSheetContents defaultHeight={height ?? defaultHeight}>
          <Styled.BottomSheetContoller
            tabIndex={0}
            draggable={false}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
          {children}
        </BottomSheetContents>
      )}
    </Styled.BottomSheetContainer>
  )
}
