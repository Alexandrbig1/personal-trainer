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
    <SwitcherTheme
      type="button"
      aria-label="Change theme"
      onClick={handleThemeToggle}
    >
      {isDarkTheme ? <IconClickDark /> : <IconClickLight />}
    </SwitcherTheme>
  );
}
