import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type LinkButtonProps = {
  children?: string | React.ReactNode;
  IconSrc?: string;
  filters?: boolean;
  alt?: string;
  variant?: string;
  to: string;
};

const LinkButton = ({
  to,
  children,
  IconSrc,
  variant,
  alt,
}: LinkButtonProps) => {
  return (
    <StyledLinkButton variant={variant}>
      <Link to={to}>
        {IconSrc ? (
          <IconWrapper variant={variant}>
            <img src={IconSrc} alt={alt} />
          </IconWrapper>
        ) : (
          children
        )}
      </Link>
    </StyledLinkButton>
  );
};

const StyledLinkButton = styled.div<{ variant?: string }>`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 13px;
  margin: 5px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

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

  ${({ variant }) =>
    variant === "logo" &&
    css`
      max-width: 100%;
      max-height: 50px;
    `}
`;

export default LinkButton;
