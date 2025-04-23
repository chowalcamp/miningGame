'use client'
import styled from '@emotion/styled'
import { useRouter } from 'next/navigation'
export default function FooterNavItem() {
  const router = useRouter()
  return (
    <>
      <NavItem onClick={() => router.push('/')}>TAP</NavItem>
      <NavItem onClick={() => router.push('/invite')}>INVITE</NavItem>
      <NavItem onClick={() => router.push('/mission')}>MISSION</NavItem>
      <NavItem>NOTICE</NavItem>
      <NavItem onClick={() => router.push('/boost')}>AIRDROP</NavItem>
    </>
  )
}

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
