import styled from "styled-components";

import { Flex } from "../styles/flex";
import OrderListImg from "../assets/icons/order-list.png";
import BasketImg from "../assets/icons/basket.png";
import LinkButton from "./LinkButton";
import { useProductContext } from "../services/ProductContext";

const ActionButtons = () => {
  const { quantityBasketProducts } = useProductContext();

  return (
    <Flex>
      <LinkButton
        to="/orders"
        variant="transparent"
        IconSrc={OrderListImg}
        alt="Lista zamówień"
      ></LinkButton>
      <div>
        <Basket content={quantityBasketProducts}>
          <LinkButton
            to="/basket"
            variant="transparent"
            alt="Koszyk"
            IconSrc={BasketImg}
          />
        </Basket>
      </div>
    </Flex>
  );
};

const Basket = styled.div<{ content?: number }>`
  & a {
    position: relative;
    &:after {
      content: "${(props) => props.content}";
      position: absolute;
      top: 0;
      right: -5px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17px;
      background: ${({ theme }) => theme.colors.black};
      height: 17px;
      font-size: 10px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default ActionButtons;
