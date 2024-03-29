import styled from "styled-components";

export const Container = styled.div`
  margin: 0 30px;
  max-height: 100%;
`;

export const ContentText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ContentTextBold = styled(ContentText)`
  font-weight: 600;
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
  font-family: ${({ theme }) => theme.fonts.special};
`;

export const LogoText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.special};
  font-size: 27px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
`;

export const LogoTextMedium = styled(LogoText)`
  font-size: 24px;
`;

export const ProductCardTitle = styled.h2`
  font-size: 26px;
  font-weight: 400;
  padding-bottom: 10px;

  @media (max-width: 1440px) {
    font-size: 24px;
  }
`;
export const PaddingTopBottom20 = styled.div`
  padding: 20px 0;
`;
export const PaddingTopBottom5 = styled.div`
  padding: 5px 0;
`;
export const PaddingTopBottom10 = styled.div`
  padding: 10px 0;
`;
export const PaddingTop10 = styled.div`
  padding-top: 10px;
`;

export const PaddingTop5 = styled.div`
  padding-top: 5px;
`;

export const PaddingBottom5 = styled.div`
  padding-bottom: 5px;
`;
export const PaddingBottom10 = styled.div`
  padding-bottom: 10px;
`;

export const PaddingBottom20 = styled.div`
  padding-bottom: 20px;
`;

export const PaddingTop5Bottom20 = styled.div`
  padding-top: 5px;
  padding-bottom: 20px;
`;

export const BorderBottom = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;
