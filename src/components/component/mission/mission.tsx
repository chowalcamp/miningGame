'use client'

import MissionCard from '@/components/common/cards/missionCard'
import styled from '@emotion/styled'

export default function Mission() {
  return (
    <Container>
      <MissionCard title="Follow X" reward={30000} status={true} />
      <MissionCard title="Telegram Room" reward={30000} status={false} />
      <MissionCard title="Visit Website" reward={30000} status={false} />
      <MissionCard title="Visit LinkTree" reward={30000} status={false} />
      <MissionCard title="Visit Instagram" reward={30000} status={false} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`
