import React, { memo, forwardRef } from 'react'

export const HamburgerIcon = memo(
  forwardRef<SVGSVGElement>((props, ref) => (
    <svg ref={ref} viewBox="0 0 100 80" {...props}>
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  )),
)
HamburgerIcon.displayName = 'HamburgerIcon'
