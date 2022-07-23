import { breakpoint } from './theme/constant'

export const getMediaQuery = (query: keyof typeof breakpoint) => {
  return `max-width: ${breakpoint[query]}`
}
