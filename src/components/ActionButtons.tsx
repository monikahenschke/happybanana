import { Flex } from "../styles/flex";
import OrderListImg from "../assets/icons/order-list.png";
import BasketImg from "../assets/icons/basket.png";
import LinkButton from "./LinkButton";

const ActionButtons = () => {
  return (
    <Flex>
      <LinkButton
        to="/order-list"
        variant="transparent"
        children="Lista zamówień"
        IconSrc={OrderListImg}
      ></LinkButton>

      <LinkButton
        to="/basket"
        variant="transparent"
        children="Koszyk"
        IconSrc={BasketImg}
      />
    </Flex>
  );
};

export default ActionButtons;
