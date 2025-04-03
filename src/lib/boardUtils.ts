import { Gem, GemType, Cell } from '@/types/game'
import { v4 as uuidv4 } from 'uuid'

const BOARD_ROWS = 5
const BOARD_COLS = 5

const GEM_TYPES: GemType[] = ['ruby', 'sapphire', 'emerald', 'diamond']

const SIZE_POOL = [
  [1, 1],
  [2, 1],
  [1, 2],
  [2, 2],
  [2, 3],
] // 원하는 사이즈들 추가 가능

export function generateBoardWithJewels(): {
  board: Cell[][]
  gems: Gem[]
} {
  const board: Cell[][] = Array.from({ length: BOARD_ROWS }, () =>
    Array.from({ length: BOARD_COLS }, () => ({ gemId: null, isRoot: false }))
  )

  const gems: Gem[] = []

  for (const type of GEM_TYPES) {
    let placed = false
    let attempts = 0

    while (!placed && attempts < 100) {
      attempts++

      const [w, h] = SIZE_POOL[Math.floor(Math.random() * SIZE_POOL.length)]
      const row = Math.floor(Math.random() * (BOARD_ROWS - h + 1))
      const col = Math.floor(Math.random() * (BOARD_COLS - w + 1))

      // 겹침 확인
      let collision = false
      for (let r = row; r < row + h; r++) {
        for (let c = col; c < col + w; c++) {
          if (board[r][c].gemId !== null) {
            collision = true
            break
          }
        }
        if (collision) break
      }

      if (!collision) {
        const id = uuidv4()
        for (let r = row; r < row + h; r++) {
          for (let c = col; c < col + w; c++) {
            board[r][c] = { gemId: id, isRoot: r === row && c === col }
          }
        }

        gems.push({
          id,
          type,
          row,
          col,
          width: w,
          height: h,
          value: w * h * 10, // 예: 면적 x10 = 점수
        })

        placed = true
      }
    }
  }

  return { board, gems }
}
