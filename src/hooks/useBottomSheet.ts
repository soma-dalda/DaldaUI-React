import { useCallback, useRef } from 'react'
import { useDebouncedCallback } from './useDebounce'

export const useBottomSheet = (closeModal: () => void) => {
  /* 
  작동 방법 : 
  1. first에 첫번째 touch의 위치 y를 넣어둠. 
  2. snapdown logic을 거치면서 중간 과정의 위치 y를 넣어둠
  3. 마지막 end에서 두 값 비교해서 과정의 y가 더 크면 (더 아래로 내려가면) 닫기
  */

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
    record.current.process = e.clientY
    console.log(record.current)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    record.current.first = e.touches[0].screenY
  }

  const snapDownLogic = (e: React.TouchEvent<HTMLDivElement>) => {
    record.current.process = e.touches[0].screenY
  }

  const handleTouchMove = useCallback(snapDownLogic, [snapDownLogic])

  const handleTouchEnd = () => {
    if (record.current.first < record.current.process) {
      record.current.first = 0
      record.current.process = 0
      closeModal()
    }
  }

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    record.current.process = e.clientY
    if (record.current.first < record.current.process) {
      record.current.first = 0
      record.current.process = 0
      closeModal()
    }
  }

  const debouncedTocuh = useDebouncedCallback(handleTouchMove, 600)
  const debouncedDrag = useDebouncedCallback(handleDrag, 600)

  return {
    handleTouchStart,
    handleTouchMove: debouncedTocuh,
    handleTouchEnd,
    handleDragEnd,
    handleDragStart,
    handleDrag: debouncedDrag,
  }
}
