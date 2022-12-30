import styled from "styled-components";
import { Link } from "react-router-dom";

import { FlexCenter } from "../styles/flex";
import { LogoText } from "../styles/components";

const HappyBananaText = () => {
  return (
    <Link to="/">
      <FlexCenter>
        <LogoText>Happy</LogoText>
        <LogoTextYellow>Banana</LogoTextYellow>
      </FlexCenter>
    </Link>
  );
};

const LogoTextYellow = styled(LogoText)`
  color: ${({ theme }) => theme.colors.primary};
`;

export default HappyBananaText;
