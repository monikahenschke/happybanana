import styled, { css } from "styled-components";

import Button from "./Button";
import { useProductContext } from "../services/ProductContext";
import { FlexCenter } from "../styles/flex";
import { Container } from "../styles/components";
import { FilterTypeEnum } from "../enums/FilterTypeEnum";
import { SortTypeEnum } from "../enums/SortTypeEnum";

const Filters = () => {
  const { filterState, setFilterState, sortState, setSortState } =
    useProductContext();

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as SortTypeEnum;
    setSortState(value);
  };

  return (
    <StyledFilters>
      <Container>
        <FlexCenter>
          <Sorting />
          <FilterButtons active={filterState}>
            <Button
              id="all"
              handleClick={() => setFilterState(FilterTypeEnum.All)}
              variant="border"
            >
              Wszystko
            </Button>
            <Button
              id="warzywo"
              handleClick={() => setFilterState(FilterTypeEnum.Vegetable)}
              variant="border"
            >
              Warzywa
            </Button>
            <Button
              id="owoc"
              handleClick={() => setFilterState(FilterTypeEnum.Fruit)}
              variant="border"
            >
              Owoce
            </Button>
          </FilterButtons>
          <FlexCenter>
            <Sorting>
              <p>sortuj po:</p>
              <Select defaultValue={sortState} onChange={selectChange}>
                <option value={SortTypeEnum.Name}>nazwa</option>
                <option value={SortTypeEnum.Price}>cena</option>
                <option value={SortTypeEnum.Origin}>pochodzenie</option>
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

const FilterButtons = styled.div<{ active?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  button {
    padding: 6px 10px;
  }

  ${({ active }) =>
    active &&
    css`
      & #${active} {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
`;

export default Filters;
