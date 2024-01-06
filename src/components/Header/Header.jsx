import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { HeaderContainer } from "./Header.styled";

export default function Header({ toggleTheme }) {
  return (
    <HeaderContainer>
      <Logo />
      <ThemeSwitcher toggleTheme={toggleTheme} />
    </HeaderContainer>
  );
}
