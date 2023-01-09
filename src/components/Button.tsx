import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  children: string;
  IconSrc?: string;
  filters?: boolean;
  variant?: string;
  handleClick?: () => void;
};

const Button = ({ children, IconSrc, variant, handleClick }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={handleClick}>
      {IconSrc ? (
        <IconWrapper variant={variant}>
          <img src={IconSrc} alt={children} />
        </IconWrapper>
      ) : (
        children
      )}
    </StyledButton>
  );
};

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
    (variant === "transparent" || "logo") &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.black};

      &:active {
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
`;

const IconWrapper = styled.div<{ variant?: string }>`
  display: flex;
  align-items: center;
  max-width: 35px;
  max-height: 35px;

export default Button;
