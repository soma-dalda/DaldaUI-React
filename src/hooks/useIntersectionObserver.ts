import { RefObject, useEffect, useState } from 'react'

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options?: Args,
): [IntersectionObserverEntry | undefined, IntersectionObserver | undefined] {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const [observer, setObserver] = useState<IntersectionObserver>()
  const frozen = entry?.isIntersecting && options?.freezeOnceVisible

  const updateEntry = (entries: IntersectionObserverEntry[]): void => {
    setEntry(entries[0])
  }
  useEffect(() => {
    setObserver(new IntersectionObserver(updateEntry, { ...options }))
  }, [])

  useEffect(() => {
    const node = elementRef?.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    observer?.observe(node)

    return () => observer?.disconnect()
  }, [elementRef, JSON.stringify(options?.threshold), options?.root, options?.rootMargin, frozen, observer])

  return [entry, observer]
}
