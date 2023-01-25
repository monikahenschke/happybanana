import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { ProductCardTitle } from "../../styles/components";

import { useProductContext } from "../../services/ProductContext";
import BasketForm from "./BasketForm";
import { Container } from "../../styles/components";
import { FlexCenter } from "../../styles/flex";
import BasketSummary from "./BasketSummary";

import { User } from "../../models/UserModel";
import { Order } from "../../models/OrderModel";

const Basket = () => {
  const navigate = useNavigate();
  const { saveNewOrder, basketProductsSummary, finalBasketPrice } =
    useProductContext();
  const navigateToOrderList = () => navigate("/orders");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<User>({ mode: "onChange" });

  const onSubmit = (data: User) => {
    if (basketProductsSummary) {
      let orderData: Order = {
        id: Date.now(),
        user: data,
        products: basketProductsSummary,
        price: finalBasketPrice,
      };
      saveNewOrder(orderData).then(navigateToOrderList);
    }
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
  margin-bottom: 30px;
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
