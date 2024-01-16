import {
  ButtonsContainer,
  HeroBtn,
  ButtonIconTelWrapper,
  ButtonIconMailWrapper,
} from "./Cta.styled";
import { FaPhone } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";

export default function Cta() {
  return (
    <ButtonsContainer>
      <HeroBtn
        href="tel:+17734141884"
        aria-label="Phone number +1 (773) 4141884"
        rel="noopener noreferrer"
      >
        Call Now
        <ButtonIconTelWrapper>
          <FaPhone />
        </ButtonIconTelWrapper>
      </HeroBtn>
      <HeroBtn href="mailto:alexsmaginpt@gmail.com">
        Email Me
        <ButtonIconMailWrapper>
          <GrMailOption />
        </ButtonIconMailWrapper>
      </HeroBtn>
    </ButtonsContainer>
  );
}
