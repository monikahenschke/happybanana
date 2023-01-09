import styled from "styled-components";

import Button from "./Button";
import { FlexCenter } from "../styles/flex";
import { Container } from "../styles/components";

const Filters = () => {
  return (
    <StyledFilters>
      <Container>
        <FlexCenter>
          <Sorting />
          <FilterButtons>
            <Button variant="border">Warzywa</Button>
            <Button variant="border">Owoce</Button>
          </FilterButtons>
          <FlexCenter>
            <Sorting>
              <p>sortuj po:</p>
              <Select>
                <option>nazwa</option>
                <option>cena</option>
              </Select>
            </Sorting>
          </FlexCenter>
        </FlexCenter>
      </Container>
    </StyledFilters>
  );
};

const StyledFilters = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  height: 70px;
  width: 100%;

  p {
    font-size: 13px;
    white-space: nowrap;
  }

  div {
    height: 100%;
  }
`;

const Select = styled.select`
  width: 70px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-left: 5px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 13px;
  border: none;
  margin-left: 10px;

  option {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 13px;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Sorting = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  button {
    padding: 6px 10px;
  }
`;

export default Filters;
