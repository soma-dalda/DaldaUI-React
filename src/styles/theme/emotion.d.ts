import { color, breakpoint } from './constant'
import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: typeof color
    breakpoint: typeof breakpoint
  }
}
