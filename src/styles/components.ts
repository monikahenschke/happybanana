import styled from "styled-components";

export const Container = styled.div`
  margin: 0 30px;
  max-height: 100%;
  max-width: 1920px;
`;

export const ContentText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

export const ContentTextSmall = styled(ContentText)`
  font-size: 13px;
`;

export const ButtonDefault = styled.span`
  font-size: 13px;
  font-weight: 600;
`;
export const PriceText = styled.span`
  font-size: 20px;
  font-family: "Acme", sans-serif;
`;

export const LogoText = styled.h1`
  font-family: Acme, sans-serif;
  font-size: 27px;
  color: ${({ theme }) => theme.colors.black};
`;

export const LogoTextMedium = styled(LogoText)`
  font-size: 24px;
`;

export const ProductCardTitle = styled.h2`
  font-size: 24px;
`;
