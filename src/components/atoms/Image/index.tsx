import React, { useCallback, useState } from 'react'
import { Skeleton } from '../Skeleton'

export type ImageProps = {
  placeholderSrc?: string
  isLoading: boolean
} & React.ImgHTMLAttributes<HTMLImageElement>

const getSkeletonHeight = (height?: string) => {
  if (height === 'auto' || !height) {
    return '250px'
  }
  return height
}

/*
 * auto: 속성을 포함하지 않는 것과 동일한 브라우저의 기본 지연 로딩 동작입니다.
 * lazy: 뷰포트로부터 계산된 거리에 도달할 때까지 리소스 로딩을 지연시킵니다.
 * eager: 페이지에서의 위치에 관계없이 리소스를 즉시 로드합니다.
 */
const ProgressiveImage = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, onLoad, onError, isLoading, ...props }, ref) => {
    const [isImageLoading, setIsImageLoading] = useState(true)

    const handleLoaded = useCallback(
      (bool: boolean) => (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsImageLoading(bool)
        if (typeof onLoad === 'function') {
          onLoad(e)
        }
      },
      [onload],
    )

    const hanldeErrored = useCallback(
      (bool: boolean) => (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsImageLoading(bool)
        if (typeof onError === 'function') {
          onError(e)
        }
      },
      [onError],
    )

    return (
      <Skeleton
        width={'100%'}
        height={getSkeletonHeight(props.height?.toLocaleString())}
        borderRadius="8px"
        isSkeletonShow={isLoading || isImageLoading}
      >
        {!isLoading && (
          <img
            ref={ref}
            src={src}
            alt={'modal-img'}
            onLoad={handleLoaded(false)}
            onError={hanldeErrored(false)}
            loading="lazy"
            width={'450px'}
            height={'250px'}
            {...props}
          />
        )}
      </Skeleton>
    )
  },
)

ProgressiveImage.displayName = 'Image'

export { ProgressiveImage as Image }
