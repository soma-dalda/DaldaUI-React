import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TypoGraphy } from '../../../styles/Typography'

type Props = {
  types: 'primary' | 'normal'
}

export const Button = styled.button<Props>`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.button};
  cursor: pointer;
  ${({ types, theme }) =>
    types === 'primary' &&
    css`
      background-color: ${theme.color.buttonPrimaryBG};
      color: white;
      border: 0px;
      ${TypoGraphy.Normal}

      &:hover {
        opacity: 0.8;
      }

      transition: opacity 200ms;
    `}

  ${({ types, theme }) =>
    types === 'normal' &&
    css`
      background-color: ${theme.color.buttonNormalBG};
      color: #696969;
      border: 1px solid ${theme.color.buttonBorderColor};
      ${TypoGraphy.Normal}

      &:hover {
        color: ${theme.color.buttonPrimaryBG};
        border: 1px solid ${theme.color.buttonPrimaryBG};
      }

      transition: color 200ms, border 200ms;
    `}
`
