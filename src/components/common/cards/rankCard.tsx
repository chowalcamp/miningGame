/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

interface RankCardProps {
  rank: number
  name: string
  score: number
  gemIcon?: string
}

const Card = styled.div`
  background: #341c0f;
  border: 2px solid #a37011;
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
`

const Rank = styled.div`
  font-size: 18px;
  font-weight: bold;
  width: 24px;
  text-align: center;
`

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  border-radius: 50%;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-grow: 1;
`

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
`

const Score = styled.div`
  font-size: 12px;
  color: #ffda7b;
`

const Gem = styled.div`
  font-size: 20px;
`

export default function RankCard({
  rank,
  name,
  score,
  gemIcon = '💎',
}: RankCardProps) {
  return (
    <Card>
      <Rank>{rank}</Rank>
      <Avatar />
      <UserInfo>
        <Name>{name}</Name>
        <Score>{score.toLocaleString()} pts</Score>
      </UserInfo>
      <Gem>{gemIcon}</Gem>
    </Card>
  )
}
