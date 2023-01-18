import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useProductContext } from "../services/ProductContext";
import { Order } from "../models/OrderModel";
import { Container } from "../styles/components";

import OrderListItem from "../components/OrderListItem";
import OrderList from "../components/OrderList";
import { sortOrdersByDate } from "../utils";

const OrdersListContainer = () => {
  const { fetchOrderList } = useProductContext();

  const [ordersList, setOrdersList] = useState<Order[]>([]);

  useEffect(() => {
    fetchOrderList().then((orders: Order[]) => {
      const sortedOrders = sortOrdersByDate(orders);
      setOrdersList(sortedOrders);
    });
  }, []);

  return (
    <Container>
      <StyledOrdersListContainer>
        <OrderList>
          {ordersList &&
            ordersList.map((order, index) => (
              <OrderListItem
                id={order.id}
                key={index}
                user={order.user}
                products={order.products}
                price={order.price}
              />
            ))}
        </OrderList>
      </StyledOrdersListContainer>
    </Container>
  );
};

const StyledOrdersListContainer = styled.div`
  flex-grow: 1;
  margin-top: 35px;
  margin-bottom: 30px;
`;
export default OrdersListContainer;
