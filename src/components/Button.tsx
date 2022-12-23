import styled, { css } from "styled-components";
import { FlexCenter } from "../styles/flex";

const StyledButton = styled.button<{ variant?: string }>`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 13px;
  margin: 5px;
  font-weight: 600;

  ${({ variant }) =>
    variant === "border" &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.black};
      &:active {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
  ${({ variant }) =>
    variant === "transparent" &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.black};

      &:active {
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 35px;
  max-height: 35px;
`;

type ButtonProps = {
  children: string;
  IconSrc?: string;
  filters?: boolean;
  variant?: string;
};
const Button = ({ children, IconSrc, variant }: ButtonProps) => {
  return (
    <StyledButton variant={variant}>
      {IconSrc ? (
        <IconWrapper>
          <img src={IconSrc} alt={children} />
        </IconWrapper>
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default Button;
