import { ThemeProvider } from '@emotion/react'
import { breakpoint, color, borderRadius } from './constant'

type Props = {
  children: React.ReactNode
}

export const DUIThemeProvider = ({ children }: Props) => {
  const Theme = {
    color,
    breakpoint,
    borderRadius,
  }

  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}
