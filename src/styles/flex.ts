import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const FlexCenter = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

export const FlexSpaceBetween = styled(Flex)`
  justify-content: space-between;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;
export const FlexEnd = styled(Flex)`
  justify-content: flex-end;
`;
