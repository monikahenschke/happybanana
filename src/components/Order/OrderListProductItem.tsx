import React from "react";
import styled from "styled-components";

import LinkButton from "../Buttons/LinkButton";

import { ContentText, PaddingTopBottom10 } from "../../styles/components";
import { FlexCenter } from "../../styles/flex";

interface OrderListProductItemProps {
  id: number;
  title: string;
  origin: string;
  unit: string;
  price: number;
  image: string;
  quantity: number;
}
const OrderListProductItem: React.FC<OrderListProductItemProps> = ({
  id,
  title,
  origin,
  unit,
  image,
  price,
  quantity,
}) => {
  const url = `/product/${id}`;

  return (
    <StyledOrderListProductItem>
      <ProductImageCntainer>
        <LinkButton to={url}>
          <ProductImage>
            <img src={require(`../../assets/products/${image}`)} alt={title} />
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
            <ContentText>{price} zł</ContentText>
          </FlexCenter>
          <FlexCenter>
            <PaddingTopBottom10>
              <ContentText>{quantity}x</ContentText>
            </PaddingTopBottom10>
          </FlexCenter>
        </ProductName>
      </div>
    </StyledOrderListProductItem>
  );
};

const StyledOrderListProductItem = styled.li`
  width: calc(100% / 6 - 10px);
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
  margin: 5px;
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
  height: 150px;
  width: 100%;

  > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export default OrderListProductItem;
