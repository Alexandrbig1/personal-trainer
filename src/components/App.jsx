import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header/Header";
import { ThemeProvider } from "styled-components";
import { Container, FooterContainer, Section, SectionExercise } from "./Layout";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Signs from "./Signs/Signs";

const theme = {
  light: {
    colors: {
      mainTextColor: "#242424",
      mainTextColorRev: "#fafafa",
      heroTextColor: "#f4f4f9",
      accentColor: "#d9243a",
      accentColorLowOp: "rgb(217, 36, 58,0.3)",
      mainTextColorLowOp: "rgb(36, 36, 36,0.5)",
      burgerOverlay: "rgb(250, 250, 250,0.9)",
      initialCardTextColor: "#f8f9fa",
      // mainBgColor: "#e9ecef",
      // mainBgColor: "#F4F4F4",
      mainBgColor: "#f8f9fa",
      mainBgColorRev: "#242424",
      aboutBgColor: "#f1f3f5",
      footerBgColor: "#242424",
      // mainBgColor: "#f4f4f9",
      switcherHoverBg: "rgb(36, 36, 36,0.1)",
      footerInfoColor: "#C6CDD1",
      whiteColor: "#fff",
      secondaryWhiteTextColorLowOp: "rgba(244, 244, 244, 0.5)",
      inactiveColor: "rgba(244, 244, 244, 0.2)",
      secondaryBlackTextColorLowOp: "rgba(36, 36, 36, 0.5)",
      iconsBgColorLowOp: "rgba(36, 36, 36, 0.1)",
      starColor: "#eea10c",
      greenColor: "#0ca678",
      darkGradientCards: "rgba(17, 17, 17, 0.5)",
      modalBgColor: "#242424",
      modalContainerColor: "#242424",
      mainBackdropBgColor: "rgba(18, 20, 23, 0.5)",
      notActivePaginationButton: "#d4d4d4",
      scrollUpColor: "rgba(18, 20, 23, 0.5)",
      slideArrowButtons: "rgba(244, 244, 244, 0.9)",
    },
  },
  dark: {
    colors: {
      mainTextColor: "#fafafa",
      mainTextColorRev: "#242424",
      heroTextColor: "#f4f4f9",
      accentColor: "#d9243a",
      accentColorLowOp: "rgb(217, 36, 58,0.3)",
      mainTextColorLowOp: "rgb(250, 250, 250,0.5)",
      burgerOverlay: "rgb(36, 36, 36,0.9)",
      initialCardTextColor: "#f8f9fa",
      mainBgColor: "#242424",
      mainBgColorRev: "#f8f9fa",
      aboutBgColor: "#1d1d1d",
      footerBgColor: "#1b1b1b",
      switcherHoverBg: "rgb(254, 250, 224, 0.1)",
      footerInfoColor: "#C6CDD1",
      whiteColor: "#1b1b1b",
      secondaryWhiteTextColorLowOp: "rgba(36, 36, 36, 0.5)",
      inactiveColor: "rgba(36, 36, 36, 0.2)",
      secondaryBlackTextColorLowOp: "rgba(244, 244, 244, 0.5)",
      iconsBgColorLowOp: "rgba(244, 244, 244, 0.1)",
      starColor: "#eea10c",
      greenColor: "#0ca678",
      darkGradientCards: "rgba(17, 17, 17, 0.5)",
      modalBgColor: "#242424",
      modalContainerColor: "#dfe0e1",
      mainBackdropBgColor: "rgba(146,146,146, 0.5)",
      notActivePaginationButton: "#494949",
      scrollUpColor: "rgba(200, 200, 200, 0.5)",
      slideArrowButtons: "rgba(244, 244, 244, 0.9)",
    },
  },
};

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? false : true;
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <Container>
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Section>
          <Hero />
        </Section>
        <Section>
          <About />
        </Section>
      </Container>
      <SectionExercise id="exercises">
        <Container>{/* <FetchedCards /> */}</Container>
      </SectionExercise>
      {/* <Section>
          <Line></Line>
        </Section> */}
      <Section id="gallery">
        <Container>
          {/* <SlideContainer>
            <SlideImages />
            <SlideText />
          </SlideContainer> */}
        </Container>
      </Section>
      <Section>
        <Container>
          <Signs />
        </Container>
      </Section>

      <FooterContainer>
        <Container>
          <Footer />
        </Container>
      </FooterContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
