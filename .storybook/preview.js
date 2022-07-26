import { Global } from '@emotion/react'
import { GlobalStyles } from '../src/styles/GlobalStyle'
import { DUIThemeProvider } from '../src/styles/theme/ThemeProvider'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <DUIThemeProvider>
      <Global styles={GlobalStyles} />
      <Story />
    </DUIThemeProvider>
  ),
]
