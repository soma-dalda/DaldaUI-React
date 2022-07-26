import styled from '@emotion/styled'
import { TypoGraphy } from '../../../styles/Typography'

export const FieldSet = styled.fieldset`
  position: relative;
  width: 100%;
`

export const Label = styled.label``

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.color.searchInputBG};
  padding: 14px 10px;
  &:active,
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.primaryText};
  }
  border-radius: ${({ theme }) => theme.borderRadius.searchInput};
  ${TypoGraphy.Small}
  font-size: 1em;
`

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  top: 50%;
  position: absolute;
  right: 0px;
  cursor: pointer;
  transform: translateY(-50%);
`
