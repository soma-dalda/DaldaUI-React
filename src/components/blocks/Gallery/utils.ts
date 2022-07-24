import { css } from '@emotion/react'

export const getGridRowEnd = (containerStyle: CSSStyleDeclaration, element: HTMLElement) => {
  const columnGap = parseInt(containerStyle.getPropertyValue('column-gap'))
  const autoRows = parseInt(containerStyle.getPropertyValue('grid-auto-rows'))
  const captionHeight = element.querySelector('.caption')?.scrollHeight ?? 0
  const imageHeight = element.querySelector('.figure')?.scrollHeight ?? 0
  const spanValue =
    captionHeight > 0
      ? Math.ceil((imageHeight + captionHeight) / autoRows + columnGap / autoRows) - 5
      : Math.ceil((imageHeight + captionHeight) / autoRows + columnGap / autoRows)

  return `span ${spanValue}`
}

export const getSize = (width: number) => {
  if (width >= 1024) {
    return css`
      grid-template-columns: repeat(3, 1fr);
    `
  } else if (width >= 7) {
    return css`
      display: block;
      width: 100%;
    `
  } else if (width >= 1024) {
    return css`
      grid-template-columns: repeat(3, 1fr);
    `
  }
}
