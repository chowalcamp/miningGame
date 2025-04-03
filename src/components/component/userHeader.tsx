'use client'
import styled from '@emotion/styled'
import { CircleUserRound } from 'lucide-react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: #5b2b10;
  border-radius: 8px;
  color: white;
  gap: 8px;
  margin-bottom: 15px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background-color: #eee;
  border-radius: 999px;
  overflow: hidden;
`

const ProgressFill = styled.div<{ ratio: number }>`
  width: ${({ ratio }) => `${ratio * 100}%`};
  height: 100%;
  background: linear-gradient(to right, #ffce42, #ff8c00);
`

const GemRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  font-size: 14px;
`

export default function UserHeader() {
  const name = 'User Name'
  const tier = 'Bronze'
  const current = 19
  const max = 20

  return (
    <Wrapper>
      <Row>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <CircleUserRound size={20} />
            {name}
          </div>
          <div style={{ fontSize: 12 }}>{tier}</div>
        </div>
        <div style={{ fontSize: 12 }}>{current}/{max}</div>
      </Row>
      <ProgressBar>
        <ProgressFill ratio={current / max} />
      </ProgressBar>
      <GemRow>
        <span>🟩 = 1</span>
        <span>🟪 = 2</span>
        <span>🔷 = 3</span>
        <span>🔶 = 4</span>
      </GemRow>
    </Wrapper>
  )
}
