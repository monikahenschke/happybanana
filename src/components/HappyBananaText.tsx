import styled from "styled-components";

import { SpecialFontStyles } from "../styles/fontStyles";
import { FlexCenter } from "../styles/flex";

const LogoText = styled.span`
  font-family: Acme, sans-serif;
  font-size: 27px;
  color: ${({ theme }) => theme.colors.black};
`;

const LogoTextYellow = styled(LogoText)`
  color: ${({ theme }) => theme.colors.primary};
`;

const HappyBananaText = () => {
  return (
    <FlexCenter>
      <SpecialFontStyles />
      <LogoText>Happy</LogoText>
      <LogoTextYellow>Banana</LogoTextYellow>
    </FlexCenter>
  );
};

export default HappyBananaText;
