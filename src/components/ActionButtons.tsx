import { Flex } from "../styles/flex";
import OrderListImg from "../images/order-list.png";
import BasketImg from "../images/basket.png";
import Button from "./Button";

const ActionButtons = () => {
  return (
    <Flex>
      <Button
        variant="transparent"
        children="Lista zamówień"
        IconSrc={OrderListImg}
      />
      <Button variant="transparent" children="Koszyk" IconSrc={BasketImg} />
    </Flex>
  );
};

export default ActionButtons;
