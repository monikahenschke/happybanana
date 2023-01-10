import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useProductContext } from "../services/ProductContext";
import { Product as ProductModel } from "../Product";
import { Container } from "../styles/components";
import { ContentText, ProductCardTitle, PriceText } from "../styles/components";
import ShoppingButton from "./ShoppingButton";
import { Flex, FlexCenter } from "../styles/flex";

type ParamTypes = {
  id: string;
};

const ProductCard: React.FC = () => {
  const { findOne } = useProductContext();
  const { id } = useParams<ParamTypes>();
  const [Product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    if (id) {
      findOne(+id).then((product) => setProduct(product));
    }
  }, [id]);

  return (
    <Container>
      <StyledProductCard>
        {Product && (
          <ProductImage>
            <img
              src={require(`../assets/products/${Product?.image}`)}
              alt={Product?.title}
            />
          </ProductImage>
        )}
        <ProductInfo>
          <ProductCardDescription>
            <ProductCardTitle>
              {Product?.title}, {Product?.quantity}
            </ProductCardTitle>
            <ContentText>{Product?.description}</ContentText>
          </ProductCardDescription>
          <PriceText>{Product?.price} zł</PriceText>
          <Flex>
            <ShoppingButton />
          </Flex>
        </ProductInfo>
      </StyledProductCard>

      <FlexCenter>
        <ProductCardTitle>Inne produkty z tej kategorii</ProductCardTitle>
        {/* TODO - lista produktów z tej samej kategorii */}
      </FlexCenter>
    </Container>
  );
};

const StyledProductCard = styled.div`
  display: flex;
  margin-top: 35px;
  margin-bottom: 30px;
`;
const ProductCardDescription = styled.div`
  margin-bottom: 20px;
`;
const ProductImage = styled.div`
  width: 45%;
  flex-shrink: 0;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25px;
  padding: 20px 0;
`;
export default ProductCard;
