import React from 'react'
import { Image } from '../../atoms'
import { ImageProps } from '../../atoms/Image'
import ListStyle from './List.styles'

export type ListProps = {
  width?: string
  height?: string
}

type ListImageProps = ImageProps

type ListItemProps = {
  children?: React.ReactNode
}

const List = ({ children, ...props }: ListProps & React.DetailsHTMLAttributes<HTMLUListElement>) => {
  return <ListStyle.List {...props}>{children}</ListStyle.List>
}

const ListItem = ({ children }: ListItemProps) => {
  return <ListStyle.ListItem tabIndex={0}>{children}</ListStyle.ListItem>
}

const ListTitle = ({ children }: ListItemProps) => {
  return <ListStyle.ListTitle tabIndex={0}>{children}</ListStyle.ListTitle>
}

const ListImage = ({ ...props }: ListImageProps) => {
  return (
    <ListStyle.ImageContainer tabIndex={0}>
      <Image {...props} width="" height="" />
    </ListStyle.ImageContainer>
  )
}

List.Title = ListTitle
List.Item = ListItem
List.Image = ListImage
List.Column = ListStyle.ListCol

export { List }
