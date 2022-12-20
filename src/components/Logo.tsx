import LogoImg from "../images/logo.png";
import { FlexCenter } from "../styles/flex";

const Logo = () => {
  return (
    <FlexCenter>
      <img src={LogoImg} alt="Logo" />
    </FlexCenter>
  );
};

export default Logo;
