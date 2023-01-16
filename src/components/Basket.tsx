import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { ProductCardTitle } from "../styles/components";

import BasketForm from "./BasketForm";
import { Container } from "../styles/components";
import { FlexCenter } from "../styles/flex";
import BasketSummary from "./BasketSummary";
import { User } from "../models/UserModel";

const Basket = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<User>({ mode: "onChange" });

  const onSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <Container>
      <StyledBasket>
        <FlexCenter>
          <ProductCardTitle>Twój koszyk</ProductCardTitle>
        </FlexCenter>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <BasketForm
            watch={watch}
            register={register}
            errors={errors}
          ></BasketForm>
          <BasketSummary>
            <SubmitInput type="submit" value="ZAMÓW" />
          </BasketSummary>
        </StyledForm>
      </StyledBasket>
    </Container>
  );
};

const StyledBasket = styled.div`
  flex-grow: 1;
  margin-top: 35px;
  margin: 30px 0;
`;

const StyledForm = styled.form`
  margin-top: 35px;
  display: flex;
`;

const SubmitInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.default};

  display: block;
  background: ${({ theme }) => theme.colors.primary};
  font-weight: 600;

  border: none;
  padding: 15px 18px;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.black};
  }
`;
export default Basket;
