import { LogoText, LogoTextYellow } from "./happybananatext.style";
import { SpecialFontStyles } from "../../styles/fontStyles";
import { FlexCenter } from "../../styles/flex";

const HappyBananaText = () => {
  return (
    <FlexCenter>
      <SpecialFontStyles />
      <LogoText>Happy</LogoText>
      <LogoTextYellow>Banana</LogoTextYellow>
    </FlexCenter>
  );
};

export default HappyBananaText;
