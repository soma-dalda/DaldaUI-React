import { ThemeProvider } from '@emotion/react'
import { useMemo } from 'react'
import { useMobile } from '../../hooks/useMobile'
import { breakpoint, color, borderRadius } from './constant'

type Props = {
  children: React.ReactNode
}

export const DUIThemeProvider = ({ children }: Props) => {
  const { isMobile } = useMobile()

  const Theme = useMemo(
    () => ({
      color,
      breakpoint,
      borderRadius,
      isMobile: isMobile(),
    }),
    [isMobile],
  )

  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}
