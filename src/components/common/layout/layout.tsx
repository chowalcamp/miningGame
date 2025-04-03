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
  margin: 10vh auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 70dvh;
  background: #50220d;
`

const Content = styled.main`
  flex: 1;
  padding: 16px;
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
