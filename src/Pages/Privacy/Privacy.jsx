import { useLocation } from "react-router-dom";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "../../components/Layout";
import { useEffect, useRef } from "react";
import { PrivacyContainer, PrivacyWrapper } from "./Privacy.styled";
import {
  ArrowBack,
  LinkBackArrow,
  LinkBackArrowText,
  LinkBackArrowWrapper,
  MainContainer,
  TermsItems,
  TermsMenu,
  TermsSubTitle,
  TermsText,
  TermsTitle,
  TextMail,
} from "../Terms/Terms.styled";

export default function Privacy({ toggleTheme, isDarkTheme, scrollToTop }) {
  const location = useLocation();
  const backLinkLocationRef = useRef(
    location.state?.from ?? "/personal-trainer/"
  );

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Alex Smagin - Privacy Policy</title>
          <meta
            name="description"
            content="Learn how Alex Smagin's personal trainer website collects, uses, and shares information in this privacy policy."
          />
        </Helmet>
      </HelmetProvider>
      <Container>
        <SecondaryHeader toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <MainContainer>
          <PrivacyContainer>
            <LinkBackArrowWrapper>
              <LinkBackArrow to={backLinkLocationRef.current}>
                <ArrowBack />
                <LinkBackArrowText>Home Page</LinkBackArrowText>
              </LinkBackArrow>
            </LinkBackArrowWrapper>
            <PrivacyWrapper>
              <TermsTitle style={{ marginBottom: "1.2rem" }}>
                Privacy Policy
              </TermsTitle>
              <TermsText>
                This Privacy Policy describes how Alex Smagin personal trainer
                website collects, uses, and shares information when you use our
                website <TextMail>alexsmagin.com</TextMail>.
              </TermsText>
            </PrivacyWrapper>
            <PrivacyWrapper>
              <TermsMenu>
                <TermsItems>
                  <TermsSubTitle>1. Introduction:</TermsSubTitle>
                  <TermsText>
                    Thank you for visiting our website. This Privacy Policy
                    outlines how we collect, use, disclose, and safeguard your
                    personal information.
                  </TermsText>
                </TermsItems>
                <TermsItems>
                  <TermsSubTitle>2. Information We Collect:</TermsSubTitle>
                  <TermsText>
                    Personal Information: We may collect your name, contact
                    information, and any other information you provide
                    voluntarily.
                  </TermsText>
                  <TermsText>
                    Usage Information: We collect information about how you
                    interact with our website, including pages visited and
                    actions taken.
                  </TermsText>
                </TermsItems>
                <TermsItems>
                  <TermsSubTitle>3. How We Use Your Information:</TermsSubTitle>
                  <TermsText>
                    We use the collected information to provide and improve our
                    services, personalize your experience, and communicate with
                    you.
                  </TermsText>
                </TermsItems>
                <TermsItems>
                  <TermsSubTitle>4. Information Sharing:</TermsSubTitle>
                  <TermsText>
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties. Your privacy is important to
                    us.
                  </TermsText>
                </TermsItems>
                <TermsItems>
                  <TermsSubTitle>
                    5. Cookies and Tracking Technologies:
                  </TermsSubTitle>
                  <TermsText>
                    We may use cookies and similar technologies to enhance your
                    experience on our website.
                  </TermsText>
                </TermsItems>
                <TermsItems>
                  <TermsSubTitle>6. Your Rights:</TermsSubTitle>
                  <TermsText>
                    You have the right to access, correct, or delete your
                    personal information. Contact us if you have any concerns.
                  </TermsText>
                </TermsItems>
                <TermsItems>
                  <TermsSubTitle>
                    7. Changes to this Privacy Policy:
                  </TermsSubTitle>
                  <TermsText>
                    We may update our Privacy Policy. Please review it
                    periodically.
                  </TermsText>
                </TermsItems>
              </TermsMenu>
            </PrivacyWrapper>
            <PrivacyWrapper>
              <TermsSubTitle
                style={{
                  textAlign: "center",
                  fontSize: "3.2rem",
                  marginBottom: "1.2rem",
                }}
              >
                Contact Us:
              </TermsSubTitle>
              <TermsText>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at <TextMail>pt@alexsmagin.com</TextMail>.
              </TermsText>
            </PrivacyWrapper>
          </PrivacyContainer>
        </MainContainer>
      </Container>
    </>
  );
}
