import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    colors: {
      mainTextColor: "#242424",
      mainTextColorLowOp: "rgb(36, 36, 36,0.5)",
      // mainBgColor: "#e9ecef",
      // mainBgColor: "#F4F4F4",
      mainBgColor: "#f8f9fa",
      // mainBgColor: "#f4f4f9",
      switcherHoverBg: "rgb(36, 36, 36,0.1)",
    },
  },
  dark: {
    colors: {
      mainTextColor: "#fafafa",
      mainTextColorLowOp: "rgb(250, 250, 250,0.5)",
      mainBgColor: "#242424",
      switcherHoverBg: "rgb(254, 250, 224, 0.1)",
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
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
