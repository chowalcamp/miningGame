export type GemType = 'ruby' | 'sapphire' | 'emerald' | 'diamond'

export interface Gem {
  id: string
  type: GemType
  row: number
  col: number
  width: number
  height: number
  value: number
}

export interface Cell {
    gemId: string | null
    isRoot: boolean // 보석의 좌상단 여부
  }