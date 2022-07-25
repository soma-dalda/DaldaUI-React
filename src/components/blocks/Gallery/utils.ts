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
