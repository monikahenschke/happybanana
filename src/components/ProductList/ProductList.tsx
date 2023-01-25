import React from "react";
import styled from "styled-components";

interface ProductListProps {
  children: React.ReactNode;
}

const ProductList: React.FC<ProductListProps> = ({ children }) => {
  return (
    <StyledProductList>
      {React.Children.map(children, (child) => (
        <>{child}</>
      ))}
    </StyledProductList>
  );
};

const StyledProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default ProductList;
