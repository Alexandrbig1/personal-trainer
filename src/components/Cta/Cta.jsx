import {
  ButtonsContainer,
  HeroBtn,
  ButtonIconTelWrapper,
  ButtonIconMailWrapper,
} from "./Cta.styled";
import { FaPhone } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";

export default function Cta({ location }) {
  return (
    <ButtonsContainer $location={location}>
      <HeroBtn
        href="tel:+17734141884"
        aria-label="Call Now +1 (773) 414-1884"
        rel="noopener noreferrer"
      >
        Call Now
        <ButtonIconTelWrapper>
          <FaPhone />
        </ButtonIconTelWrapper>
      </HeroBtn>
      <HeroBtn
        href="mailto:pt@alexsmagin.com"
        aria-label="Email Me at pt@alexsmagin.com"
      >
        Email Me
        <ButtonIconMailWrapper>
          <GrMailOption />
        </ButtonIconMailWrapper>
      </HeroBtn>
    </ButtonsContainer>
  );
}
