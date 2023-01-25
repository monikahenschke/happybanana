import React from "react";
import styled from "styled-components";

import { Product } from "../../models/ProductModel";
import LinkButton from "../Buttons/LinkButton";

import {
  ContentText,
  ContentTextSmall,
  PriceText,
  PaddingTop5Bottom20,
  PaddingTopBottom5,
} from "../../styles/components";
import { FlexCenter } from "../../styles/flex";

import ShoppingButton from "../ShoppingButton";

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
            <img src={require(`../../assets/products/${image}`)} alt={title} />
          </ProductImage>
        </LinkButton>
      </ProductImageCntainer>
      <ProductDetails className="animatedDetails">
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
            <PaddingTop5Bottom20>
              <PriceText>{price} zł</PriceText>
            </PaddingTop5Bottom20>
          </FlexCenter>
        </ProductName>
        <ProductButtons className="animatedButtons">
          <FlexCenter>
            <ShoppingButton productId={Number(id)} />
          </FlexCenter>
        </ProductButtons>
      </ProductDetails>
    </StyledProductListItem>
  );
};

const StyledProductListItem = styled.li`
  width: 24%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
  position: relative;

  &:hover {
    & .animatedButtons {
      opacity: 1;
      transition: opacity 0.5s ease-out;
    }

    & .animatedDetails {
      transform: translateY(-70px);
      transition: transform 0.3s ease-out;
      will-change: transform;
    }
  }
`;

const ProductDetails = styled.div`
  background: white;
  transform: translateY(0);
  width: 100%;
  will-change: transform;
  transition: transform 0.3s ease-out;

  & * {
    /* will-change: transform; */
  }
`;
const ProductButtons = styled.div`
  position: absolute;
  left: 0;
  bottom: -50px;
  width: 100%;
  opacity: 0;

  transition: opacity 0.5s ease-out;
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
  /* will-change: transform; */
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
