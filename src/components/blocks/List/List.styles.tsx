import styled from '@emotion/styled'
import { ListProps } from '.'

const List = styled.ul<ListProps>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    border-radius: 8px;
    width: 100%;
    height: ${({ height }) => height};
  }
`

const ListItem = styled.li`
  flex-wrap: nowrap;
`

const ListTitle = styled.li`
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
