import { color } from './constant'
import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: typeof color
  }
}
