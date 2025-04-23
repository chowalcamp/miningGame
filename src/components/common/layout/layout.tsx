'use client'

/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { ReactNode } from 'react'
import Header from './header'
import FooterNav from './footer'

interface Props {
  children: ReactNode
}

const Container = styled.div`
  max-width: 430px;
  margin: 0 auto; // 개발끝나면 10vh -> 0으로 변경
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100dvh; // 개발끝나면 100vh로 변경
  background: #50220d;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`

const Content = styled.main`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export default function Layout({ children }: Props) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <FooterNav />
    </Container>
  )
}
