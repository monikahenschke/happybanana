import React from "react";
import styled from "styled-components";

import { Product } from "../Product";
import LinkButton from "./LinkButton";
import { incrementInput, decrementInput } from "../utils";
import { ContentText, ContentTextSmall, PriceText } from "../styles/components";
import { FlexCenter } from "../styles/flex";

const ProductListItem: React.FC<Product> = ({
  id,
  title,
  origin,
  quantity,
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
        <LinkButton to={url}>
          <ContentText>
            {title}, {quantity}
          </ContentText>
        </LinkButton>
        <FlexCenter>
          <ContentTextSmall>{origin}</ContentTextSmall>
        </FlexCenter>
        <FlexCenter>
          <PriceText>{price} zł</PriceText>
        </FlexCenter>
        <ShoppingButtons>
          <button type="button" onClick={decrementInput}>
            -
          </button>
          <input type="number" min="1" max="15" />
          <button type="button" onClick={incrementInput}>
            +
          </button>
        </ShoppingButtons>
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

const ShoppingButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
