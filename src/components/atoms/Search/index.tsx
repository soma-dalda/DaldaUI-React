import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react'
import { SearchLineIcon } from '../../icons/SearchLineIcon'
import * as Styled from './Search.styles'

type Props = {
  // fieldset form 과 form id 가 같으면 연결 가능
  form?: string
  // label htmlfor 과 input id 가 같으면 연결 가능
  htmlFor?: string
  // Icon 유무
  icon?: boolean
  onClickIcon?: () => void
}

export const Search = forwardRef<HTMLInputElement, PropsWithChildren<Props & InputHTMLAttributes<HTMLInputElement>>>(
  ({ form, children, htmlFor, onClickIcon, ...props }, ref) => {
    return (
      <Styled.FieldSet form={form}>
        <Styled.Label htmlFor={htmlFor}>{children}</Styled.Label>
        <Styled.Input ref={ref} {...props} />
        <Styled.Icon onClick={onClickIcon}>
          <SearchLineIcon />
        </Styled.Icon>
      </Styled.FieldSet>
    )
  },
)

Search.displayName = 'Search'
