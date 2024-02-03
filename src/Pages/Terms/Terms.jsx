import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "../../components/Layout";
import { useEffect } from "react";
import {
  ArrowBack,
  LinkBackArrow,
  LinkBackArrowText,
  LinkBackArrowWrapper,
  MainContainer,
  TermsContactWrapper,
  TermsContainer,
  TermsItems,
  TermsMenu,
  TermsSubTitle,
  TermsText,
  TermsTitle,
  TextMail,
} from "./Terms.styled";

export default function Terms({ toggleTheme, isDarkTheme, scrollToTop }) {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Alex Smagin - Terms of Service</title>
          <meta
            name="description"
            content="Explore the Terms of Service for Alex Smagin's personal trainer website."
          />
        </Helmet>
      </HelmetProvider>
      <Container>
        <SecondaryHeader toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <MainContainer>
          <TermsContainer>
            <LinkBackArrowWrapper>
              <LinkBackArrow to="/personal-trainer/">
                <ArrowBack />
                <LinkBackArrowText>Home Page</LinkBackArrowText>
              </LinkBackArrow>
            </LinkBackArrowWrapper>
            <TermsTitle>Terms of Service</TermsTitle>
            <TermsMenu>
              <TermsItems>
                <TermsSubTitle>1. Acceptance of Terms:</TermsSubTitle>
                <TermsText>
                  By using our website, you agree to these Terms of Service. If
                  you do not agree, please do not use our site.
                </TermsText>
              </TermsItems>
              <TermsItems>
                <TermsSubTitle>2. Use of Content:</TermsSubTitle>
                <TermsText>
                  You may use the content for personal, non-commercial purposes.
                  Reproduction or distribution without permission is prohibited.
                </TermsText>
              </TermsItems>
              <TermsItems>
                <TermsSubTitle>3. User Conduct:</TermsSubTitle>
                <TermsText>
                  You agree not to engage in any activity that may interfere
                  with the operation of the website or violate applicable laws.
                </TermsText>
              </TermsItems>
              <TermsItems>
                <TermsSubTitle>4. Limitation of Liability:</TermsSubTitle>
                <TermsText>
                  We are not liable for any direct, indirect, incidental, or
                  consequential damages arising from your use of the website.
                </TermsText>
              </TermsItems>
              <TermsItems>
                <TermsSubTitle>5. Disclaimer of Warranties:</TermsSubTitle>
                <TermsText>
                  The information, content, and materials on this website are
                  provided "as is" and without warranties of any kind, either
                  express or implied. We make no warranties, expressed or
                  implied, regarding the accuracy, completeness, reliability,
                  suitability, or availability of the website or the
                  information, products, services, or related graphics contained
                  on the website for any purpose. To the fullest extent
                  permissible under applicable law, we disclaim all warranties,
                  express or implied, including but not limited to implied
                  warranties of merchantability, fitness for a particular
                  purpose, non-infringement, or other violation of rights. We do
                  not warrant that the website will be uninterrupted or
                  error-free, that defects will be corrected, or that the
                  website or the server that makes it available are free of
                  viruses or other harmful components. Any reliance you place on
                  such information is strictly at your own risk. We shall not be
                  liable for any direct, indirect, incidental, consequential, or
                  punitive damages arising out of your access to or use of the
                  website.
                </TermsText>
              </TermsItems>
              <TermsItems>
                <TermsSubTitle>6. Changes to Terms:</TermsSubTitle>
                <TermsText>
                  We may modify these terms at any time. Continued use of the
                  website constitutes acceptance of the modified terms.
                </TermsText>
              </TermsItems>
              <TermsItems>
                <TermsSubTitle>7. Governing Law:</TermsSubTitle>
                <TermsText>
                  This agreement and any dispute arising out of or in connection
                  with this agreement shall be governed by and construed in
                  accordance with the laws of the State of Illinois, without
                  regard to its conflict of law principles. Any legal action or
                  proceeding arising under or in connection with this agreement
                  shall be brought exclusively in the state or federal courts
                  located within the State of Illinois, County of Cook, and both
                  parties consent to the personal jurisdiction of such courts.
                </TermsText>
              </TermsItems>
            </TermsMenu>
            <TermsContactWrapper>
              <TermsSubTitle
                style={{ textAlign: "center", fontSize: "3.2rem" }}
              >
                Contact Us:
              </TermsSubTitle>
              <TermsText>
                If you have any questions or concerns about these Terms of
                Service, please contact us at{" "}
                <TextMail>pt@alexsmagin.com</TextMail>.
              </TermsText>
            </TermsContactWrapper>
          </TermsContainer>
        </MainContainer>
      </Container>
    </>
  );
}
