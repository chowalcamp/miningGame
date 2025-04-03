/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const Footer = styled.footer`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  gap: 10px;
  padding: 0 10px;
`

const NavItem = styled.button`
  width: 20%;
  font-size: 13px;
  font-weight: bold;
  padding: 13px 8px;
  color: #283b40;
  background: #ffbd4d;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function FooterNav() {
  return (
    <Footer>
      <NavItem>TAP</NavItem>
      <NavItem>INVITE</NavItem>
      <NavItem>MISSON</NavItem>
      <NavItem>NOTICE</NavItem>
      <NavItem>AIRDROP</NavItem>
    </Footer>
  )
}
