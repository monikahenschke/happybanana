import styled from "styled-components";
import React, { useState } from "react";

import IconMinus from "../assets/icons/minus.svg";
import IconPlus from "../assets/icons/plus.svg";
import IconBasket from "../assets/icons/basket.png";
import { useProductContext } from "../services/ProductContext";

import Button from "./Button";

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

const decrementInput = (
  inputValue: number,
  setInputValue: React.Dispatch<React.SetStateAction<number>>
) => {
  if (inputValue === 1) {
    setInputValue(1);
  } else {
    setInputValue((prevValue) => prevValue - 1);
  }
};

const incrementInput = (
  inputValue: number,
  setInputValue: React.Dispatch<React.SetStateAction<number>>
) => {
  if (inputValue >= 15) {
    setInputValue(15);
  } else {
    setInputValue((prevValue) => prevValue + 1);
  }
};

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

const StyledShoppingButton = styled.div`
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

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
const AddToBasketButton = styled.div`
  button {
    margin: 0;
    margin-left: 10px;
    height: 50px;
    width: 50px;
  }
`;

export default ShoppingButton;
