import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

import { Image } from '../../atoms'
import { AnchorContainer, Figure, ImageContainer } from './Gallery.styles'
import { getGridRowEnd } from './utils'

import { useDebouncedCallback } from '../../../hooks/useDebounce'
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import { useWindowResize } from '../../../hooks/useWindowResize'

type GalleryProps = {
  children?: React.ReactNode
}

type GalleryContextType = {
  addItemRefs: (entitiy: React.RefObject<HTMLAnchorElement>) => void
  handleLayout: () => void
}

const initialValue: GalleryContextType = {
  addItemRefs: () => {},
  handleLayout: () => {},
}

const GalleryContext = createContext(initialValue)

export const Gallery = ({ children }: GalleryProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [itemRefs, setItemRefs] = useState<React.RefObject<HTMLAnchorElement>[]>([])

  const handleLayout = useCallback(() => {
    itemRefs.forEach((itemRef) => {
      if (!itemRef.current || !ref.current) {
        return
      }
      const masonryContainerStyle = getComputedStyle(ref.current)
      itemRef.current.style.gridRowEnd = getGridRowEnd(masonryContainerStyle, itemRef.current)
    })
  }, [ref, itemRefs])

  // Trade-off between UX and Performance
  const debouncedFunction = useDebouncedCallback(handleLayout, 0)
  useWindowResize(debouncedFunction, [ref.current, itemRefs, debouncedFunction])

  useEffect(() => {
    debouncedFunction()
  }, [ref, itemRefs, debouncedFunction])

  return (
    <GalleryContext.Provider
      value={{ addItemRefs: (entitiy) => setItemRefs((prev) => [...prev, entitiy]), handleLayout }}
    >
      <ImageContainer ref={ref}>{children}</ImageContainer>
    </GalleryContext.Provider>
  )
}

const GalleryImage = ({ src, children, href }: React.ImgHTMLAttributes<HTMLImageElement> & { href?: string }) => {
  const { addItemRefs, handleLayout } = useContext(GalleryContext)
  const [imageSrc, setImageSrc] = useState<string>()

  const ref = useRef<HTMLAnchorElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const [entry, observer] = useIntersectionObserver(imageRef)
  const debouncedHandleLayout = useDebouncedCallback(handleLayout, 200)

  useEffect(() => {
    if (entry?.isIntersecting) {
      const target = entry.target as HTMLImageElement
      setImageSrc(target.dataset.src)
      observer?.unobserve(entry.target)
      debouncedHandleLayout()
    }
  }, [entry, observer])

  useEffect(() => {
    addItemRefs(ref)
  }, [ref])

  return (
    <AnchorContainer href={href} ref={ref} className="masonry-item">
      <Figure className="figure">
        <Image
          ref={imageRef}
          className={children ? 'img' : 'img no-caption-img'}
          data-src={src}
          src={imageSrc}
          isLoading={false}
        />
        <figcaption className={children ? 'caption' : ''}>{children}</figcaption>
      </Figure>
    </AnchorContainer>
  )
}

Gallery.Image = GalleryImage
