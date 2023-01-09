
import React, { useState } from "react";
import styled from "styled-components";

import { Product } from "../Product";
import LinkButton from "./LinkButton";

import Button from "./Button";
import {
  ContentText,
  ContentTextSmall,
  PriceText,
  PaddingVertical20,
  PaddingVertical5,
  PaddingTop5,
} from "../styles/components";
import { FlexCenter } from "../styles/flex";
import IconMinus from "../assets/icons/minus.svg";
import IconPlus from "../assets/icons/plus.svg";
import IconBasket from "../assets/icons/basket.png";

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

  const [inputValue, setInputValue] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //TODO
    // let { value, min, max } = e.target;
    // let numValue = Number(value);
    // numValue = Math.max(
    //   Number(min),
    //   Math.min(Number(max), Number(value.replace(/\D/, "")))
    // );
    // setInputValue(numValue);
  };

  const incrementInput = () => {
    if (inputValue >= 15) {
      setInputValue(15);
    } else {
      setInputValue((prevValue) => prevValue + 1);
    }
  };

  const decrementInput = () => {
    if (inputValue === 1) {
      setInputValue(1);
    } else {
      setInputValue((prevValue) => prevValue - 1);
    }
  };


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
              {title}, {quantity}
            </ContentText>
          </LinkButton>
          <FlexCenter>
            <PaddingVertical5>
              <ContentTextSmall>{origin}</ContentTextSmall>
            </PaddingVertical5>
          </FlexCenter>
          <FlexCenter>
            <PaddingTop5>
              <PriceText>{price} zł</PriceText>
            </PaddingTop5>
          </FlexCenter>
        </ProductName>
        <PaddingVertical20>
          <FlexCenter>
            <ShoppingButtons>
              <Button IconSrc={IconMinus} handleClick={decrementInput}>
                -
              </Button>
              <input
                type="number"
                value={inputValue}
                min="1"
                max="15"
                onChange={handleChange}
              />
              <Button IconSrc={IconPlus} handleClick={incrementInput}>
                +
              </Button>
            </ShoppingButtons>
            <AddToBasket>
              <Button IconSrc={IconBasket}>Add to basket</Button>
            </AddToBasket>
          </FlexCenter>
        </PaddingVertical20>
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

const ShoppingButtons = styled.div`
  width: 80px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: transparent;
    height: 100%;
    padding: 0;
  }
  input {
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.default};
  }
`;

const AddToBasket = styled.div`
  button {
    margin: 0;
    height: 50px;
    width: 50px;
  }

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
