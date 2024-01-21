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
  FooterTextAndButtonsWrapper,
} from "./Footer.styled";

const color = {
  white: "#fafafa",
  instagram: "#e1306c",
  youtube: "#ff0000",
  facebook: "#3b5998",
  discord: "#7289d9",
};

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogoWrapper>
          <Logo color={color} />
          <SocialIcons color={color} />
        </FooterLogoWrapper>
        <FooterTextAndButtonsWrapper>
          <TextPrivacyWrapper>
            <FooterText>
              Your Health is an Investment, Not an Expense.
            </FooterText>
          </TextPrivacyWrapper>
          <Cta location="footer" />
        </FooterTextAndButtonsWrapper>
      </FooterWrapper>
      <FooterInfoWrapper>
        <div>
          <FooterInfoText>
            &#169;
            <Year /> AlexSmagin. All rights reserved.
          </FooterInfoText>
        </div>
        <FooterInfoText>
          <a to="privacy">Privacy Policy</a>
          <span> / </span>
          <a to="terms">Terms of Service</a>
        </FooterInfoText>
      </FooterInfoWrapper>
    </FooterContainer>
  );
}
