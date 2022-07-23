import { ThemeProvider } from '@emotion/react'
import { breakpoint, LightColor } from './constant'

type Props = {
  children: React.ReactNode
}

export const DDSThemeProvider = ({ children }: Props) => {
  const lightTheme = {
    color: LightColor,
    breakpoint,
  }

  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
}
