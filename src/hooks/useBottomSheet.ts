import { useCallback, useRef } from 'react'
import { useThrottle } from './useThrottle'

export const useBottomSheet = (
  closeModal: () => void,
  onChangeDrag?: (e: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void,
  fail?: () => void,
  animation?: boolean,
) => {
  if (!animation) {
    return {
      handleTouchStart: undefined,
      handleTouchMove: undefined,
      handleTouchEnd: undefined,
      handleDragEnd: undefined,
      handleDragStart: undefined,
      handleDrag: undefined,
    }
  }

  const record = useRef({
    first: 0,
    process: 0,
  })

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    record.current.first = e.clientY
    const img = new Image()
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='
    e.dataTransfer.setDragImage(img, 0, 0)
  }

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (typeof onChangeDrag === 'function') {
      onChangeDrag(e)
    }
    e.preventDefault()
    record.current.process = e.clientY
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    record.current.first = e.touches[0].screenY
  }

  const snapDownLogic = (e: React.TouchEvent<HTMLDivElement>) => {
    if (typeof onChangeDrag === 'function') {
      onChangeDrag(e)
    }
    record.current.process = e.touches[0].screenY
  }

  const handleTouchMove = useCallback(snapDownLogic, [snapDownLogic])

  const handleEnd = () => {
    if (record.current.first + 100 < record.current.process) {
      record.current.first = 0
      record.current.process = 0
      closeModal()

      return
    }
    if (typeof fail === 'function') {
      fail()
    }
  }

  const debouncedTocuh = useThrottle(handleTouchMove, 5)
  const debouncedDrag = useThrottle(handleDrag, 5)

  return {
    handleTouchStart,
    handleDragStart,
    handleTouchMove: debouncedTocuh,
    handleDrag: debouncedDrag,
    handleTouchEnd: handleEnd,
    handleDragEnd: handleEnd,
  }
}
