import React from "react";
import styled from "styled-components";

import { Product } from "../models/ProductModel";
import LinkButton from "./LinkButton";

import {
  ContentText,
  ContentTextSmall,
  PriceText,
  PaddingTopBottom20,
  PaddingTopBottom5,
  PaddingTop5,
} from "../styles/components";
import { FlexCenter } from "../styles/flex";

import ShoppingButton from "./ShoppingButton";

const ProductListItem: React.FC<Product> = ({
  id,
  title,
  origin,
  unit,
  price,
  image,
  category,
}) => {
  const url = `/product/${id}`;

  return (
    <StyledProductListItem>
      <ProductImageCntainer>
        <LinkButton to={url}>
          <ProductImage>
            <img src={require(`../assets/products/${image}`)} alt={title} />
          </ProductImage>
        </LinkButton>
      </ProductImageCntainer>
      <div>
        <ProductName>
          <LinkButton to={url}>
            <ContentText>
              {title}, {unit}
            </ContentText>
          </LinkButton>
          <FlexCenter>
            <PaddingTopBottom5>
              <ContentTextSmall>{origin}</ContentTextSmall>
            </PaddingTopBottom5>
          </FlexCenter>
          <FlexCenter>
            <PaddingTop5>
              <PriceText>{price} zł</PriceText>
            </PaddingTop5>
          </FlexCenter>
        </ProductName>
        <PaddingTopBottom20>
          <FlexCenter>
            <ShoppingButton productId={Number(id)} />
          </FlexCenter>
        </PaddingTopBottom20>
      </div>
    </StyledProductListItem>
  );
};

const StyledProductListItem = styled.li`
  width: 24%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
`;

const ProductImageCntainer = styled.div`
  width: 100%;
  * {
    width: 100%;
  }

  > div {
    padding: 0;
    margin: 0;
  }
`;

const ProductName = styled.div`
  padding-top: 10px;
  text-align: center;
`;

const ProductImage = styled.div`
  height: 230px;
  width: 100%;

  > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export default ProductListItem;
