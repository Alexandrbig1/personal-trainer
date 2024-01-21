import {
  IconClickLight,
  IconClickDark,
  SwitcherTheme,
} from "./ThemeSwitcher.styled";

export default function ThemeSwitcher({ toggleTheme, isDarkTheme }) {
  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <SwitcherTheme onClick={handleThemeToggle}>
      {isDarkTheme ? <IconClickDark /> : <IconClickLight />}
    </SwitcherTheme>
  );
}
