import styled from "styled-components";
import HappyBananaText from "../HappyBananaText";
import Logo from "../Logo";
import { Container } from "../../styles/components";
import { Flex, FlexCenter } from "../../styles/flex";

const Footer = () => {
  return (
    <StyledFooter data-testid="footer">
      <Container>
        <Flex>
          <FlexCenter>
            <HappyBananaText footer={true} />
          </FlexCenter>
          <Logo />
        </Flex>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 70px;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default Footer;
