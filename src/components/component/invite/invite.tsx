import MissionCard from '@/components/common/cards/missionCard'
import styled from '@emotion/styled'

export default function InviteImg() {
  return (
    <>
      <Container>
        <Img src="/inviteImg.png" alt="invite" />
      </Container>
      <MissionCard title="친구 초대하기" reward={30000} status={false} />
    </>
  )
}

const Img = styled.img`
  width: 60%;
  height: 60%;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f0f0f0;
  margin: 20px 0;
`
