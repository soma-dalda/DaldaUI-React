export type BottomSheetContextType = {
  isContentsVisible: boolean
  isBgVisible: boolean
  show: () => void
  hide: () => void
  onClickBackGround: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  showContents: () => void
  hideBackground: () => void
}

export type BottomSheetProps = {
  defaultHeight: string
  visible: boolean
  setVisible: (bool: boolean) => void
  borderRaduis?: string
  animation?: boolean
  background?: boolean
}

export type BottomSheetStyledProps = {
  isContentsVisible?: boolean
  delay?: number
}