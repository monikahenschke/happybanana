import { FlexCenter, Flex } from "../styles/flex";
import OrderListImg from "../images/order-list.png";
import BasketImg from "../images/basket.png";

const ActionButtons = () => {
  return (
    <Flex>
      <FlexCenter>
        <img src={OrderListImg} alt="Logo" />
      </FlexCenter>
      <FlexCenter>
        <img src={BasketImg} alt="Logo" />
      </FlexCenter>
    </Flex>
  );
};

export default ActionButtons;
