import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`

type SkeletonProps = {
  isSkeletonShow?: boolean
  width?: string
  height?: string
  borderRadius?: string
  animation?: boolean
  children?: React.ReactNode
}

const StyledSkeleton = styled.div<SkeletonProps>`
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  ${({ isSkeletonShow, width, height, borderRadius, animation = true }) =>
    isSkeletonShow &&
    css`
      width: ${width};
      height: ${height};
      background-color: #c2cfd6;
      border-radius: ${borderRadius};
      * {
        opacity: 0;
        visibility: hidden;
      }
      ${animation &&
      css`
        animation: ${skeletonLoading} 1s linear infinite alternate;
      `};
    `};
`

export const Skeleton = ({ children, ...props }: SkeletonProps) => {
  if (props.isSkeletonShow) {
    return <StyledSkeleton {...props}>{children}</StyledSkeleton>
  }

  return <>{children}</>
}
