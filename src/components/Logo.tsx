import LogoImg from "../assets/logo-hb.png";
import LinkButton from "./Buttons/LinkButton";

const Logo = () => {
  return (
    <LinkButton to="/" IconSrc={LogoImg} alt="Logo" variant="logo"></LinkButton>
  );
};

export default Logo;
