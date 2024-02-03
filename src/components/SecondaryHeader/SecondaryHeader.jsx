import {
  HeaderContainer,
  HeaderText,
  NavContainer,
  NavMenu,
} from "../Header/Header.styled";
import Logo from "../Logo/Logo";
import SecondaryMenuBurger from "../SecondaryMenuBurger/SecondaryMenuBurger";
import SocialIcons from "../SocialIcons/SocialIcons";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function SecondaryHeader({ toggleTheme, isDarkTheme }) {
  return (
    <HeaderContainer>
      <Logo />
      <div>
        <NavContainer>
          <NavMenu>
            <li>
              <HeaderText href="/">home</HeaderText>
            </li>
          </NavMenu>
          <SocialIcons />
          <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </NavContainer>
      </div>
      <SecondaryMenuBurger
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
    </HeaderContainer>
  );
}
