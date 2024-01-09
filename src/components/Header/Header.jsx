import Logo from "../Logo/Logo";
import SocialIcons from "../SocialIcons/SocialIcons";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {
  HeaderContainer,
  HeaderText,
  NavContainer,
  NavMenu,
} from "./Header.styled";

export default function Header({ toggleTheme, isDarkTheme }) {
  return (
    <HeaderContainer>
      <Logo />
      <div>
        <NavContainer>
          <NavMenu>
            <li>
              <HeaderText href="#">home</HeaderText>
            </li>
            <li>
              <HeaderText href="#">about</HeaderText>
            </li>
            <li>
              <HeaderText href="#">exercises</HeaderText>
            </li>
          </NavMenu>
          <SocialIcons />
          <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </NavContainer>
      </div>
    </HeaderContainer>
  );
}
