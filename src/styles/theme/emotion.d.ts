import '@emotion/react'
import { color, borderRadius, breakpoint } from './constant'

declare module '@emotion/react' {
  export interface Theme {
    color: typeof color
    breakpoint: typeof breakpoint
    borderRadius: typeof borderRadius
  }
}
