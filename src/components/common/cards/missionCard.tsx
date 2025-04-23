/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import BuyButton from './button'
import { Check } from 'lucide-react'

interface MissionCardProps {
  title: string
  reward: number
  status: boolean
}

const Card = styled.div`
  background: #281107;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
`

const Icon = styled.div`
  font-size: 28px;
`

const TextGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
`

const Description = styled.div`
  font-size: 18px;
  //   color: #ffda7b;
`

export default function MissionCard({
  title,
  reward,
  status,
}: MissionCardProps) {
  return (
    <Card>
      <TextGroup>
        <Title>{title}</Title>
        <Description>P + {reward.toLocaleString()}</Description>
      </TextGroup>
      {status ? (
        <Check color="#12de45" strokeWidth={4.25} />
      ) : (
        <BuyButton>START</BuyButton>
      )}
    </Card>
  )
}
