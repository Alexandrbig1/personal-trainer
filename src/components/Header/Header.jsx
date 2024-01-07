import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {
  FacebookIcon,
  HeaderContainer,
  HeaderText,
  Link,
  NavContainer,
  NavMenu,
  YoutubeIcon,
  InstagramIcon,
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
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <YoutubeIcon />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </Link>
            </li>
          </NavMenu>
          <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </NavContainer>
      </div>
    </HeaderContainer>
  );
}
