import StyledHeader from "./header.style";
import { Container } from "../../styles/container";
import Logo from "../Logo";
import ActionButtons from "../ActionButtons";
import HappyBananaText from "../HappyBananaText/HappyBananaText";
import { FlexSpaceBetween } from "../../styles/flex";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexSpaceBetween>
          <Logo />
          <HappyBananaText />
          <ActionButtons />
        </FlexSpaceBetween>
      </Container>
    </StyledHeader>
  );
};

export default Header;
