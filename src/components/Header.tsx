import styled from "styled-components";
import { Container } from "../styles/container";
import Logo from "./Logo";
import ActionButtons from "./ActionButtons";
import HappyBananaText from "./HappyBananaText";
import { FlexSpaceBetween } from "../styles/flex";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  height: 70px;
  width: 100%;
  position: relative;

  div {
    height: 100%;
  }
`;

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
