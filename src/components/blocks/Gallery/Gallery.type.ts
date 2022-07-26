export type GalleryProps = {
  isMobile?: boolean
}

export type GalleryContextType = {
  addItemRefs: (entitiy: React.RefObject<HTMLAnchorElement>) => void
  handleLayout: () => void
}
