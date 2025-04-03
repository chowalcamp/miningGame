/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { CircleX } from 'lucide-react'

const HeaderBar = styled.header`
  height: 60px;
  background: #0f202d;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 16px;
  font-weight: bold;
  font-size: 18px;
`

export default function Header() {
  return (
    <HeaderBar>
      <CircleX size={40} />
    </HeaderBar>
  )
}
