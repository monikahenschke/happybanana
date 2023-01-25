import React from "react";
import styled from "styled-components";

import OrderListProductItem from "./OrderListProductItem";
import IconDot from "../../assets/icons/point.svg";

import { Order } from "../../models/OrderModel";

import {
  ContentText,
  PaddingTop5,
  PriceText,
  ContentTextBold,
  PaddingBottom10,
} from "../../styles/components";
import { getDate } from "../../utils";

import {
  FlexColumn,
  FlexEnd,
  FlexCenter,
  FlexSpaceBetween,
} from "../../styles/flex";

const OrderListItem: React.FC<Order> = ({ id, user, products, price }) => {
  const date = getDate(id);
  return (
    <StyledOrderListItem>
      <FlexColumn>
        <OrderId>
          <FlexSpaceBetween>
            <FlexCenter>
              <Dot>
                <img src={IconDot} alt="Dot" />
              </Dot>
              <h3>
                <ContentText>Zamówienie nr. {id}</ContentText>
              </h3>
            </FlexCenter>
            <>{date}r.</>
          </FlexSpaceBetween>
        </OrderId>
        <StyledOrderList>
          {products &&
            products.map((item, index) => (
              <OrderListProductItem
                id={item.product.id}
                key={index}
                title={item.product.title}
                origin={item.product.origin}
                unit={item.product.unit}
                image={item.product.image}
                price={item.product.price}
                quantity={item.quantity}
              />
            ))}
        </StyledOrderList>
      </FlexColumn>
      <OrderInfo>
        <FlexColumn>
          <PaddingBottom10>
            <ContentTextBold>Dane zamawiającego:</ContentTextBold>
          </PaddingBottom10>
          <ContentText>
            {user.firstname} {user.lastname}
          </ContentText>
          <ContentText>
            <PaddingTop5>{user.email}</PaddingTop5>
          </ContentText>
          <ContentText>
            <PaddingTop5>
              {user.street} {user.housenumber}
            </PaddingTop5>
          </ContentText>
          <ContentText>
            <PaddingTop5>
              {user.postcode} {user.city}
            </PaddingTop5>
          </ContentText>
        </FlexColumn>
        <FlexEnd>
          <ContentText>
            zapłacono:
            <PriceText> {price} zł</PriceText>
          </ContentText>
        </FlexEnd>
      </OrderInfo>
    </StyledOrderListItem>
  );
};

const StyledOrderList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  margin-bottom: 1px;
`;

const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 5px;
  padding-top: 20px;
`;

const Dot = styled.div`
  display: flex;
  align-items: center;
  max-width: 14px;
  max-height: 14px;
`;

const StyledOrderListItem = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

const OrderId = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;

  & h3 {
    display: inline;
    padding-left: 10px;
    font-weight: 400;
  }
`;

export default OrderListItem;
