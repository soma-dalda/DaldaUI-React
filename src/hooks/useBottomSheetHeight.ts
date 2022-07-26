export const useBottomSheetHeight = (setHeight: (h: string) => void, defaultHeight: string) => {
  const bottomSheetHide = () => {
    setHeight(defaultHeight)
  }

  const onChangeCallback = (e: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (e.type === 'drag') {
      const event = e as React.DragEvent<HTMLDivElement>
      setHeight(`calc(100% - ${event.clientY}px)`)
    }

    if (e.type === 'touchmove') {
      const event = e as React.TouchEvent<HTMLDivElement>
      setHeight(`calc(100% - ${event.touches[0].clientY}px)`)
    }
  }

  const handleAfterFailCallback = () => {
    setHeight(defaultHeight)
  }

  return {
    success: bottomSheetHide,
    onChange: onChangeCallback,
    fail: handleAfterFailCallback,
  }
}
