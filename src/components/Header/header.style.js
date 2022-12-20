import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  height: 70px;
  width: 100%;
  position: relative;
`;

export default StyledHeader;
