import LogoImg from "../assets/logo-hb.png";
import LinkButton from "./LinkButton";

const Logo = () => {
  return (
    <LinkButton
      to="/"
      IconSrc={LogoImg}
      children="Logo"
      variant="logo"
    ></LinkButton>
  );
};

export default Logo;
