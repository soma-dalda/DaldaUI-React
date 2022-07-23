import { useEffect, useState } from 'react'
const getMatches = (query: string) => {
  if (typeof window === undefined) {
    return false
  }

  return window.matchMedia(query).matches
}

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(getMatches(query))
  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)
    setMatches(getMatches(query))
    matchMedia.addEventListener('change', handleChange)
    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}
