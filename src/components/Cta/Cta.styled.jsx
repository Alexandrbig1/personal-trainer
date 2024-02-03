import styled, { keyframes } from "styled-components";
import { sansFont } from "../fonts";

const buttonAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const buttonEmailAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(-15deg) scale(1.2);
  }
  50% {
    transform: rotate(15deg) scale(1.2);
  }
  75% {
    transform: rotate(-15deg) scale(1.2);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: ${(p) => (p?.$location === "hero" ? "end" : "center")};
  flex-direction: ${(p) => (p?.$location === "hero" ? "column" : "row")};
  gap: 1.2rem;
  z-index: 10;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    z-index: 10;
  }
`;

export const ButtonIconTelWrapper = styled.span`
  color: ${(p) => p.theme.colors.greenColor};
  font-size: 1.4rem;
  width: 1.4rem;
  height: 1.4rem;
  transition: transform 5s ease-in-out;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const ButtonIconMailWrapper = styled.span`
  color: ${(p) => p.theme.colors.heroTextColor};
  font-size: 1.4rem;
  width: 1.4rem;
  height: 1.4rem;
  transition: transform 2s ease-in-out;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const HeroBtn = styled.a`
  width: 10.4rem;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.accentColor};
  outline: none;
  border: none;
  padding: 0.4rem 1.2rem;
  border-radius: 6px;
  color: ${(p) => p.theme.colors.heroTextColor};
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${(p) => p.theme.colors.heroTextColor};
  font-family: ${sansFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  &:hover {
    ${ButtonIconTelWrapper} {
      animation: ${buttonAnimation} 1.2s infinite ease-in-out;
    }
    ${ButtonIconMailWrapper} {
      animation: ${buttonEmailAnimation} 2.5s infinite ease-in-out;
    }
  }

  @media (min-width: 768px) {
    width: auto;
    gap: 1.2rem;
    padding: 1.2rem 2.4rem;
    font-size: 16px;
    width: auto;
  }
`;
