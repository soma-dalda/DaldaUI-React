import { ThemeProvider } from '@emotion/react'
import { breakpoint, color } from './constant'

type Props = {
  children: React.ReactNode
}

export const DUIThemeProvider = ({ children }: Props) => {
  const Theme = {
    color,
    breakpoint,
  }

  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}
