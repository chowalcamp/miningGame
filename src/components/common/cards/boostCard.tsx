/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import BuyButton from './button'

interface BoostCardProps {
  title: number
  reward: number
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

const TextGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const Description = styled.div`
  font-size: 18px;
  color: #ffda7b;
`

export default function BoostCard({ title, reward }: BoostCardProps) {
  return (
    <Card>
      <TextGroup>
        <Title>+{title.toLocaleString()} 곡괭이</Title>
        <Description>{reward.toLocaleString()} P</Description>
      </TextGroup>
      <BuyButton>BUY</BuyButton>
    </Card>
  )
}
