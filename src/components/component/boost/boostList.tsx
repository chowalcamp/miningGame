'use client'

import BoostCard from '@/components/common/cards/boostCard'
import styled from '@emotion/styled'

export default function BoostList() {
  return (
    <Container>
      <BoostCard title={500} reward={500} />
      <BoostCard title={1000} reward={1000} />
      <BoostCard title={2000} reward={2000} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
`
