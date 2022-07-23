import styled from '@emotion/styled'
import { ListProps } from '.'
import { getTypoStyle, Typography } from '../../../styles/Typography'

const List = styled.ul<ListProps>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  display: grid;
  grid-template-columns: 0.4fr 60%;
  gap: 10px;

  img {
    border-radius: 8px;
    width: auto;
    height: ${({ height }) => height};
  }
`

const ListItem = styled.li`
  flex-wrap: nowrap;
`

const ListTitle = styled.li`
  ${getTypoStyle(Typography.Title2)}
  font-size: 1.3em;
  height: 60%;
`

const ImageContainer = styled.div`
  height: 100%;
  width: auto;
  cursor: pointer;
`

const ListCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ListStyle = {
  List,
  ListItem,
  ImageContainer,
  ListCol,
  ListTitle,
}

export default ListStyle
