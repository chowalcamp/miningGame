// // src/components/Gem.tsx
// /** @jsxImportSource @emotion/react */
// import styled from '@emotion/styled'
// import { Gem as GemType } from '@/types/game'

// interface Props {
//   gem: GemType
//   onClick: () => void
//   top: number
//   left: number
//   width: number
//   height: number
//   filter: string
// }

// const GemButton = styled.button<{ color: string; w: number; h: number }>`
//   grid-column: span ${({ w }) => w};
//   grid-row: span ${({ h }) => h};
//   width: 100%;
//   height: 100%;
//   border-radius: 8px;
//   font-weight: bold;
//   font-size: 16px;
//   background-color: ${({ color }) => color};
//   color: ${({ color }) => (color === '#facc15' ? 'black' : 'white')};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: transform 0.15s ease;

//   &:hover {
//     transform: scale(1.05);
//   }

//   position: absolute;
// `

// export default function Gem({ gem, onClick, top, left, width, height, filter }: Props) {
//   const colorMap: Record<string, string> = {
//     ruby: '#e11d48',
//     sapphire: '#2563eb',
//     emerald: '#059669',
//     diamond: '#facc15',
//   }

//   return (
//     <GemButton
//       color={colorMap[gem.type]}
//       w={gem.width}
//       h={gem.height}
//       onClick={onClick}
//       style={{ top, left, width, height, filter }}
//     >
//       {gem.value}
//     </GemButton>
//   )
// }
