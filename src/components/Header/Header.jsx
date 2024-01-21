// import BMI from "../BMI/BMI";
import Logo from "../Logo/Logo";
import MenuBurger from "../MenuBurger/MenuBurger";
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
              <HeaderText href="#gallery">gallery</HeaderText>
            </li>
            <li>
              <HeaderText href="#about">about</HeaderText>
            </li>
            <li>
              <HeaderText href="#exercises">exercises</HeaderText>
            </li>
          </NavMenu>
          <SocialIcons />
          <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </NavContainer>
      </div>
      <MenuBurger toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </HeaderContainer>
  );
}
