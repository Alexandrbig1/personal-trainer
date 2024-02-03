import { useState } from "react";
import {
  BurgerContainer,
  BurgerLogoWrapper,
  BurgerMenuItems,
  CloseBurgerMenu,
  IconMenu,
  IconMenuWrapper,
  Menu,
  MenuBurgerContainer,
  MenuText,
} from "../MenuBurger/MenuBurger.styled";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Cta from "../CTA/Cta";
import SocialIcons from "../SocialIcons/SocialIcons";

const color = {
  instagram: "#e1306c",
  youtube: "#ff0000",
  facebook: "#3b5998",
  discord: "#7289d9",
};

export default function SecondaryMenuBurger({ toggleTheme, isDarkTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <MenuBurgerContainer>
        <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <IconMenuWrapper onClick={toggleMenu}>
          <IconMenu />
        </IconMenuWrapper>
      </MenuBurgerContainer>

      <Menu $isOpen={menuOpen}>
        <BurgerContainer>
          <CloseBurgerMenu onClick={toggleMenu} />
          <nav>
            <BurgerMenuItems>
              <li onClick={toggleMenu}>
                <MenuText href="/">Home</MenuText>
              </li>
            </BurgerMenuItems>
          </nav>
          <Cta />
          <BurgerLogoWrapper>
            <SocialIcons color={color} onClick={toggleMenu} />
          </BurgerLogoWrapper>
        </BurgerContainer>
      </Menu>
    </>
  );
}
