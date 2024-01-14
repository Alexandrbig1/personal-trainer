import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header/Header";
import { ThemeProvider } from "styled-components";
import { Container, FooterContainer, Section, SectionExercise } from "./Layout";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import About from "./About/About";

const theme = {
  light: {
    colors: {
      mainTextColor: "#242424",
      mainTextColorRev: "#fafafa",
      heroTextColor: "#f4f4f9",
      accentColor: "#d9243a",
      accentColorLowOp: "rgb(217, 36, 58,0.3)",
      mainTextColorLowOp: "rgb(36, 36, 36,0.5)",
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
      starColor: "#eea10c",
      greenColor: "#0ca678",
      darkGradientCards: "rgba(17, 17, 17, 0.5)",
      modalBgColor: "#242424",
      mainBackdropBgColor: "rgba(18, 20, 23, 0.5)",
      notActivePaginationButton: "#d4d4d4",
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
      starColor: "#eea10c",
      greenColor: "#0ca678",
      darkGradientCards: "rgba(17, 17, 17, 0.5)",
      modalBgColor: "#242424",
      mainBackdropBgColor: "rgba(244, 244, 244, 0.5)",
      notActivePaginationButton: "#494949",
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
        {/* <Section>
          <Line></Line>
        </Section> */}
        <Section>
          <About />
        </Section>
        <SectionExercise id="exercises">
          {/* <FetchedCards /> */}
        </SectionExercise>
        {/* <Section>
          <Line></Line>
        </Section> */}
      </Container>
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
