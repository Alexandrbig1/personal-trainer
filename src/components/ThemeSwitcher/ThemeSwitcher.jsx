import { Button } from "./ThemeSwitcher.styled";

export default function ThemeSwitcher({ toggleTheme }) {
  const handleThemeToggle = () => {
    toggleTheme();
  };
  return <Button onClick={handleThemeToggle}>theme</Button>;
}
