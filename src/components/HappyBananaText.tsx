import styled from "styled-components";
import { Link } from "react-router-dom";

import { FlexCenter } from "../styles/flex";
import { LogoText } from "../styles/components";

interface PropsH {
  footer?: boolean;
}

const HappyBananaText = ({ footer }: PropsH) => {
  return (
    <Link to="/">
      <FlexCenter>
        <LogoText>Happy</LogoText>
        {footer ? (
          <LogoTextWhite>Banana</LogoTextWhite>
        ) : (
          <LogoTextYellow>Banana</LogoTextYellow>
        )}
      </FlexCenter>
    </Link>
  );
};

const LogoTextYellow = styled(LogoText)`
  color: ${({ theme }) => theme.colors.primary};
`;
const LogoTextWhite = styled(LogoText)`
  color: ${({ theme }) => theme.colors.white};
`;

export default HappyBananaText;
