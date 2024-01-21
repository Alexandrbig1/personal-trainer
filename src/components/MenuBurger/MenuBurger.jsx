import { useState } from "react";
import {
  BurgerContainer,
  CloseBurgerMenu,
  IconMenu,
  IconMenuWrapper,
  Menu,
  MenuBurgerContainer,
  BurgerMenuItems,
  BurgerLogoWrapper,
  MenuText,
} from "./MenuBurger.styled";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import SocialIcons from "../SocialIcons/SocialIcons";
import Cta from "../CTA/Cta";

const color = {
  instagram: "#e1306c",
  youtube: "#ff0000",
  facebook: "#3b5998",
  discord: "#7289d9",
};

export default function MenuBurger({ toggleTheme, isDarkTheme }) {
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
                <MenuText href="#gallery">Gallery</MenuText>
              </li>
              <li onClick={toggleMenu}>
                <MenuText href="#about">About</MenuText>
              </li>
              <li onClick={toggleMenu}>
                <MenuText href="#exercises">Exercises</MenuText>
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
