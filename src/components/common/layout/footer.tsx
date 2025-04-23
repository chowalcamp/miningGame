/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import FooterNavItem from './footerNavItem'

const Footer = styled.footer`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  gap: 10px;
  padding: 0 10px;
`

export default function FooterNav() {
  return (
    <Footer>
      <FooterNavItem />
    </Footer>
  )
}
