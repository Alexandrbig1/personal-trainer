import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import { Container } from "../../components/Layout";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import {
  NotFoundContainer,
  NotFoundWrapper,
  NotFoundMainContainer,
} from "./NotFound.styled";
import {
  ArrowBack,
  LinkBackArrow,
  LinkBackArrowWrapper,
  MainContainer,
  TermsText,
  TermsTitle,
  LinkBackArrowText,
} from "../Terms/Terms.styled";

export default function NotFound({ toggleTheme, isDarkTheme, scrollToTop }) {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta
            name="description"
            content="We're sorry, but the page you're looking for seems to have taken a break from its workout routine. Don't worry, though! You can always return to the home page and continue your fitness journey with us. If you think this is a mistake, please contact us so we can get things back on track. Keep pushing towards your fitness goals!"
          />
        </Helmet>
      </HelmetProvider>

      <Container>
        <SecondaryHeader toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <MainContainer>
          <NotFoundMainContainer>
            <LinkBackArrowWrapper>
              <LinkBackArrow to="/personal-trainer/">
                <ArrowBack />
                <LinkBackArrowText>Home Page</LinkBackArrowText>
              </LinkBackArrow>
            </LinkBackArrowWrapper>
            <NotFoundContainer>
              <NotFoundWrapper>
                <TermsTitle style={{ color: "#f4f4f9" }}>
                  404 - Page Not Found!
                </TermsTitle>
                <TermsText style={{ color: "#f4f4f9" }}>
                  We're sorry, but the page you're looking for seems to have
                  taken a break from its workout routine. Don't worry, though!
                  You can always return to the home page and continue your
                  fitness journey with us. If you think this is a mistake,
                  please contact us so we can get things back on track. Keep
                  pushing towards your fitness goals!
                </TermsText>
              </NotFoundWrapper>
            </NotFoundContainer>
          </NotFoundMainContainer>
        </MainContainer>
      </Container>
    </>
  );
}
