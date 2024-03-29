import styled from "styled-components";
import { robotoFont } from "../fonts";

export const HeaderContainer = styled.header`
  padding: 2.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: top 0.3s ease-in-out;
  position: relative;
  z-index: 100;
`;

export const NavContainer = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const HeaderText = styled.a`
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
  font-family: ${robotoFont};
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
