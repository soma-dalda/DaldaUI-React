import { forwardRef, useContext } from 'react'
import { BottomSheetContext } from './index'

export const BottomSheetHideButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
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
