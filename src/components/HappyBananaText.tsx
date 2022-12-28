import styled from "styled-components";
import { Link } from "react-router-dom";

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
    <Link to="/">
      <FlexCenter>
        <SpecialFontStyles />
        <LogoText>Happy</LogoText>
        <LogoTextYellow>Banana</LogoTextYellow>
      </FlexCenter>
    </Link>
  );
};

export default HappyBananaText;
