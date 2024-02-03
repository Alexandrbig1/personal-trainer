// import BMI from "../BMI/BMI";
import Logo from "../Logo/Logo";
import MenuBurger from "../MenuBurger/MenuBurger";
import SocialIcons from "../SocialIcons/SocialIcons";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderText,
  NavContainer,
  NavMenu,
} from "./Header.styled";

export default function Header({ toggleTheme, isDarkTheme }) {
  const navigate = useNavigate();

  const handleLinkClick = (to) => {
    const sectionId = to.replace("/", "");
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(to);
    }
  };

  return (
    <HeaderContainer>
      <Logo />
      <div>
        <NavContainer>
          <NavMenu>
            <li>
              <HeaderText
                href="/gallery"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/gallery");
                }}
              >
                gallery
              </HeaderText>
            </li>
            <li>
              <HeaderText
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/about");
                }}
              >
                about
              </HeaderText>
            </li>
            <li>
              <HeaderText
                href="/exercises"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/exercises");
                }}
              >
                exercises
              </HeaderText>
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
