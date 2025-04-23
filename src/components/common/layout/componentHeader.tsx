'use client'
import styled from '@emotion/styled'

interface Props {
  title: string
}

const getSubTitle = (title: string) => {
  switch (title) {
    case 'INVITE':
      return '친구를 초대하고 코인을 받아가세요! \n (첫 번째 초대 및 신규 플레이어만 해당)'
    case 'MISSION':
      return '일일 임무는 UTC 기준 00:00에 갱신됩니다.'
    case 'RANKING':
      return '누적 포인트에 따라 랭크가 상승합니다. \n (상위 랭크에 도달할수록 특별한 혜택이 제공됩니다.)'
    case 'BOOST':
      return '부스트를 구매하면 곡괭이가 즉시 충전됩니다!'
  }
}

export default function ComponentHeader({ title }: Props) {
  const subTitle = getSubTitle(title)

  return (
    <Header>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`

const SubTitle = styled.h2`
  font-size: 15px;
  font-weight: normal;
  white-space: pre-line;
  text-align: center;
  line-height: 1.4;
`
