import styled from "styled-components";
import React, { useState } from "react";

import IconMinus from "../assets/icons/minus.svg";
import IconPlus from "../assets/icons/plus.svg";
import IconBasket from "../assets/icons/basket.png";
import { useProductContext } from "../services/ProductContext";
import { incrementInput, decrementInput, handleChange } from "../utils";

import Button from "./Buttons/Button";

type ShoppingButtonProps = { productId: number };

const ShoppingButton = ({ productId }: ShoppingButtonProps) => {
  const [inputValue, setInputValue] = useState<number>(1);

  const { addToBasket } = useProductContext();
  return (
    <>
      <StyledShoppingButton>
        <Button
          IconSrc={IconMinus}
          handleClick={() => decrementInput(inputValue, setInputValue)}
        >
          -
        </Button>
        <input
          type="number"
          name="amount-text-input"
          value={inputValue}
          min="1"
          max="15"
          onChange={handleChange}
        />
        <Button
          IconSrc={IconPlus}
          handleClick={() => incrementInput(inputValue, setInputValue)}
        >
          +
        </Button>
      </StyledShoppingButton>
      <AddToBasketButton>
        <Button
          handleClick={() =>
            addToBasket({ productId: productId, quantity: inputValue })
          }
          IconSrc={IconBasket}
        >
          Add to basket
        </Button>
      </AddToBasketButton>
    </>
  );
};

const StyledShoppingButton = styled.div`
  width: 80px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.2s ease-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.black};
    transition: all 0.3s ease-out;
  }

  button {
    background: transparent;
    height: 100%;
    padding: 0;
    flex-shrink: 0;
    margin: 0 10px;
  }
  input {
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.default};
    width: 100%;

    &::-webkit-outer-spin-button, /*Chrome*/
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
`;
const AddToBasketButton = styled.div`
  button {
    margin: 0;
    margin-left: 10px;
    height: 50px;
    width: 50px;
    border: 1px solid transparent;
    transition: border 0.2s ease-out;

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.black};
      transition: all 0.3s ease-out;
    }
  }
`;

export default ShoppingButton;
