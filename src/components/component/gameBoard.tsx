/** @jsxImportSource @emotion/react */
'use client'

import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { generateBoardWithJewels } from '@/lib/boardUtils'
import { Cell, Gem } from '@/types/game'

const BOARD_ROWS = 5
const BOARD_COLS = 5
const CELL_SIZE = 60
const CELL_GAP = 4

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`

const ScoreRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 4px;
  position: relative;
`

const ScoreBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 8px;
  padding: 4px 12px;
  font-weight: bold;
  color: white;
  font-size: 16px;
`
const ScoreValue = styled.span`
  font-size: 18px;
  font-weight: 700;
`

const HiddenLabel = styled.div`
  font-size: 12px;
  color: #ddd;
  position: absolute;
  top: 15px;
  right: 0;
`

const PickaxeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
  margin-bottom: 8px;
  padding: 6px 16px;
  background-color: #2f1c0c;
  border: 2px solid white;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`

const PickaxeIcon = styled.span`
  font-size: 18px;
`

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(${BOARD_ROWS}, ${CELL_SIZE}px);
  grid-template-columns: repeat(${BOARD_COLS}, ${CELL_SIZE}px);
  gap: ${CELL_GAP}px;
  background-color: #42210b;
  padding: 4px;
`

const CellWrapper = styled.div`
  position: relative;
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  border-radius: 6px;
  overflow: hidden;
`

const RockCover = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #555, #333);
  border-radius: 6px;
  border: 1px solid #222;
  z-index: 10;
`

const crack = keyframes`
  0% { transform: scale(1) rotate(0deg); opacity: 1; }
  50% { transform: scale(1.1) rotate(3deg); }
  100% { transform: scale(0.5) rotate(-20deg); opacity: 0; }
`

const RockCrack = styled(RockCover)`
  animation: ${crack} 0.4s ease-out forwards;
`

const GemPart = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
  border-radius: 6px;
`

const GemFull = styled.div<{ color: string }>`
  position: absolute;
  border-radius: 6px;
  z-index: 5;
  background-color: ${({ color }) => color};
  box-sizing: border-box;
  padding: 2px;
  transform: scale(0.96);
`

export default function GameBoard() {
  const [board, setBoard] = useState<Cell[][]>([])
  const [gems, setGems] = useState<Gem[]>([])
  const [score, setScore] = useState(0)
  const [pickaxeCount, setPickaxeCount] = useState(9999)
  const [coverMap, setCoverMap] = useState<boolean[][]>([])
  const [discoveredGemIds, setDiscoveredGemIds] = useState<Set<string>>(new Set())
  const [crackingCell, setCrackingCell] = useState<[number, number] | null>(null)
  const [isResetting, setIsResetting] = useState(false)

  const resetGame = () => {
    setIsResetting(true)
    setCrackingCell(null)
    setTimeout(() => {
      const { board, gems } = generateBoardWithJewels()
      setBoard(board)
      setGems(gems)
      setCoverMap(
        Array.from({ length: BOARD_ROWS }, () =>
          Array.from({ length: BOARD_COLS }, () => true)
        )
      )
      setDiscoveredGemIds(new Set())
      setCrackingCell(null)
      setIsResetting(false)
    }, 300)
  }

  useEffect(() => {
    resetGame()
  }, [])

  const handleCellClick = (row: number, col: number) => {
    if (isResetting || crackingCell || !coverMap[row][col]) return

    setCrackingCell([row, col])

    setTimeout(() => {
      const newCover = [...coverMap.map((r) => [...r])]
      newCover[row][col] = false
      setCoverMap(newCover)
      setCrackingCell(null)

      const gemId = board[row][col].gemId
      if (!gemId) return

      const targetGem = gems.find((g) => g.id === gemId)
      if (!targetGem) return

      let allOpen = true
      for (let r = targetGem.row; r < targetGem.row + targetGem.height; r++) {
        for (let c = targetGem.col; c < targetGem.col + targetGem.width; c++) {
          if (newCover[r][c]) {
            allOpen = false
            break
          }
        }
        if (!allOpen) break
      }

      if (!allOpen || discoveredGemIds.has(gemId)) return

      const updatedSet = new Set(discoveredGemIds)
      updatedSet.add(gemId)
      setDiscoveredGemIds(updatedSet)
      setScore((prev) => prev + targetGem.value)

      if (updatedSet.size === gems.length) {
        setTimeout(() => {
          resetGame()
        }, 600)
      }
    }, 400)
  }

  const colorMap: Record<string, string> = {
    ruby: '#e11d48',
    sapphire: '#2563eb',
    emerald: '#059669',
    diamond: '#facc15',
  }

  const hiddenCount = gems.length - discoveredGemIds.size

  return (
    <Wrapper>
      <ScoreRow>
        <ScoreBox>
          <span style={{ fontSize: '17px' }}>P</span>
          <ScoreValue>{score.toLocaleString()}</ScoreValue>
        </ScoreBox>
        <HiddenLabel>숨겨진 보석 {hiddenCount}</HiddenLabel>
      </ScoreRow>

      <Grid>
        {gems.map((gem) => {
          if (!discoveredGemIds.has(gem.id)) return null
          const top = gem.row * (CELL_SIZE + CELL_GAP)
          const left = gem.col * (CELL_SIZE + CELL_GAP)
          const width = gem.width * CELL_SIZE + (gem.width - 1) * CELL_GAP
          const height = gem.height * CELL_SIZE + (gem.height - 1) * CELL_GAP

          return (
            <GemFull
              key={gem.id}
              color={colorMap[gem.type]}
              style={{ top, left, width, height }}
            />
          )
        })}

        {board.map((row, rIdx) =>
          row.map((cell, cIdx) => {
            const gem = gems.find((g) => g.id === cell.gemId)
            const isDiscovered = gem && discoveredGemIds.has(gem.id)

            return (
              <CellWrapper key={`cell-${rIdx}-${cIdx}`}>
                {gem && !isDiscovered && (
                  <GemPart
                    color={colorMap[gem.type]}
                    style={{
                      filter: 'brightness(0)',
                    }}
                  />
                )}

                {coverMap[rIdx][cIdx] && (
                  crackingCell?.[0] === rIdx && crackingCell?.[1] === cIdx ? (
                    <RockCrack />
                  ) : (
                    <RockCover onClick={() => handleCellClick(rIdx, cIdx)} />
                  )
                )}
              </CellWrapper>
            )
          })
        )}
      </Grid>

      <PickaxeBox>
        <PickaxeIcon>🪓</PickaxeIcon>
        {pickaxeCount.toLocaleString()}
      </PickaxeBox>
    </Wrapper>
  )
}
