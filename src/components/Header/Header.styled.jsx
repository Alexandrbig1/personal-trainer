import styled from "styled-components";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa6";

export const HeaderContainer = styled.header`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const HeaderText = styled.a`
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
  font-family: DM Sans;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  transition: 0.3s linear;

  position: relative;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    background-color: ${(p) => p.theme.colors.mainTextColor};
    height: 1px;
    width: 0;
    left: 0;
    bottom: 0;
    transition: 0.3s linear;
  }

  &:before {
    content: "";
    position: absolute;
    background-color: ${(p) => p.theme.colors.mainTextColor};
    height: 1px;
    width: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s linear;
  }

  &:hover {
    color: ${(p) => p.theme.colors.mainTextColor};
  }

  &:hover:after {
    width: 50%;
  }

  &:hover:before {
    width: 50%;
  }
`;

export const Link = styled.a`
  display: block;
  width: 3.6rem;
  height: 3.6rem;
`;

export const InstagramIcon = styled(FaInstagram)`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: #e1306c;
  }
`;

export const YoutubeIcon = styled(FaYoutube)`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: #ff0000;
  }
`;

export const FacebookIcon = styled(FaFacebook)`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: #3b5998;
  }
`;
