import React, { useMemo, useEffect, useState } from "react";
import styled from "styled-components";

import { Product } from "../Product";
import Button from "./Button";
import LeftArrow from "../assets/icons/left-arrow.png";
import RightArrow from "../assets/icons/right-arrow.png";

export interface PaginationProps {
  itemsPerPage: number;
  itemsList: Product[];
  setItemsListCurrentlyShown: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Pagination = ({
  itemsPerPage,
  itemsList,
  setItemsListCurrentlyShown,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PaginationContainer>
      <PaginationUl>
        <Arrow key="prev">
          <Button variant="transparent" IconSrc={LeftArrow}>
            Previous
          </Button>
        </Arrow>
        <Arrow key="next">
          <Button variant="transparent" IconSrc={RightArrow}>
            Next
          </Button>
        </Arrow>
      </PaginationUl>
    </PaginationContainer>
  );
};

const Arrow = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & button svg {
    width: 13px;
  }
`;

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
`;
const PaginationUl = styled.div`
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  & button:disabled,
  & button[disabled] {
    cursor: not-allowed;
    pointer-events: all !important;
  }
`;

export default Pagination;
