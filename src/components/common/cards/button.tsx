/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

interface ButtonProps {
  //   onClick?: () => void
  children: React.ReactNode
}

const StyledButton = styled.button`
  padding: 5px 10px;
  background: #ffbd4d;
  border-radius: 5px;
  color: #281107;
  font-weight: 550;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export default function BuyButton({
  //   onClick,
  children,
}: ButtonProps) {
  return <StyledButton>{children}</StyledButton>
}
