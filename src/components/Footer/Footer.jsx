import Cta from "../CTA/Cta";
import Logo from "../Logo/Logo";
import SocialIcons from "../SocialIcons/SocialIcons";
import Year from "../Year/Year";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { FaPhone } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import {
  FooterLogoWrapper,
  FooterText,
  FooterWrapper,
  TextPrivacyWrapper,
  FooterInfoWrapper,
  FooterContainer,
  FooterInfoText,
  FooterTextAndButtonsWrapper,
  FooterContactContainer,
  FooterContactIconLink,
  FooterContactIcons,
  FooterLogoSocialWrapper,
  FooterContactLinkText,
} from "./Footer.styled";

const color = {
  white: "#fafafa",
  instagram: "#e1306c",
  youtube: "#ff0000",
  facebook: "#3b5998",
  discord: "#7289d9",
  phone: "#28a745",
  mail: "#007bff",
  location: "#dc3545",
};

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogoWrapper>
          <FooterLogoSocialWrapper>
            <Logo color={color} />
            <SocialIcons color={color} />
          </FooterLogoSocialWrapper>
          <FooterContactContainer>
            <Tooltip title="Call Me" arrow placement="right">
              <FooterContactIconLink
                href="tel:+17734141884"
                aria-label="Call +1 (773) 414-1884"
                rel="noopener noreferrer"
              >
                <FooterContactIcons>
                  <FaPhone color={color.phone} />
                </FooterContactIcons>
                <FooterContactLinkText>+1 (773) 414-1884</FooterContactLinkText>
              </FooterContactIconLink>
            </Tooltip>
            <Tooltip title="Email Me" arrow placement="right">
              <FooterContactIconLink
                href="mailto:pt@alexsmagin.com"
                aria-label="Email address pt@alexsmagin.com"
              >
                <FooterContactIcons>
                  <GrMailOption color={color.mail} />
                </FooterContactIcons>
                <FooterContactLinkText>pt@alexsmagin.com</FooterContactLinkText>
              </FooterContactIconLink>
            </Tooltip>
            <Tooltip title="My Location" arrow placement="right">
              <FooterContactIconLink
                href="https://www.google.com/maps?q=Chicago,IL,USA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Google Maps for the location in Chicago, IL, USA"
              >
                <FooterContactIcons>
                  <IoLocationOutline color={color.location} />
                </FooterContactIcons>
                <FooterContactLinkText>Chicago, IL, USA</FooterContactLinkText>
              </FooterContactIconLink>
            </Tooltip>
          </FooterContactContainer>
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
          <Link to="privacy">Privacy Policy</Link>
          <span> / </span>
          <Link to="terms">Terms of Service</Link>
        </FooterInfoText>
      </FooterInfoWrapper>
    </FooterContainer>
  );
}
