import styled from "styled-components";

export const HappyBananaText = styled.p``;

export const LogoText = styled.span`
  font-family: Acme, sans-serif;
  font-size: 27px;
  color: ${({ theme }) => theme.colors.black};
`;

export const LogoTextYellow = styled(LogoText)`
  color: ${({ theme }) => theme.colors.primary};
`;
