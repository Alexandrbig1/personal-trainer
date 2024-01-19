import Cta from "../CTA/Cta";
import Logo from "../Logo/Logo";
import SocialIcons from "../SocialIcons/SocialIcons";
import Year from "../Year/Year";
import {
  FooterLogoWrapper,
  FooterText,
  FooterWrapper,
  TextPrivacyWrapper,
  FooterInfoWrapper,
  FooterContainer,
  FooterInfoText,
} from "./Footer.styled";

const color = {
  white: "#fafafa",
  instagram: "#e1306c",
  youtube: "#ff0000",
  facebook: "#3b5998",
};

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogoWrapper>
          <Logo color={color} />
          <SocialIcons color={color} />
        </FooterLogoWrapper>
        <TextPrivacyWrapper>
          <FooterText>Your Health is an Investment, Not an Expense.</FooterText>
        </TextPrivacyWrapper>
        <Cta />
      </FooterWrapper>
      <FooterInfoWrapper>
        <div>
          <FooterInfoText>
            &#169;
            <Year /> AlexSmagin. All rights reserved.
          </FooterInfoText>
        </div>
        <FooterInfoText>
          <a href="#">Privacy Policy</a>
          <span> / </span>
          <a href="#">Terms of Service</a>
        </FooterInfoText>
      </FooterInfoWrapper>
    </FooterContainer>
  );
}