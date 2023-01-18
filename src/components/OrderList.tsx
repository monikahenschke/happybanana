import React from "react";

import { ProductCardTitle } from "../styles/components";
import { FlexColumn, FlexCenter } from "../styles/flex";

interface OrderListProps {
  children: React.ReactNode;
}

const OrderList: React.FC<OrderListProps> = ({ children }) => {
  return (
    <>
      <FlexCenter>
        <ProductCardTitle>Lista zamówień</ProductCardTitle>
      </FlexCenter>
      <FlexColumn>
        {React.Children.map(children, (child) => (
          <>{child}</>
        ))}
      </FlexColumn>
    </>
  );
};

export default OrderList;
