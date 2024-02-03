import styled, { keyframes } from "styled-components";
import { secondaryFont } from "../fonts";

const backgroundAnimation = keyframes`
  0% {
  background-color: ${(p) => p.theme.colors.scrollUpColor};
  }
  50% {
  background-color: transparent;

  }
  100% {
  background-color: ${(p) => p.theme.colors.scrollUpColor};
  }
`;

export const BMIHeaderText = styled.p`
  color: ${(p) => p.theme.colors.heroTextColorLowOp};
  font-family: ${secondaryFont};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  transition: 0.3s linear;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const BmiContainer = styled.div`
  position: fixed;
  top: 8rem;
  right: 4rem;
  background-color: ${(p) => p.theme.colors.switcherHoverBg};
  background-color: ${(p) => p.theme.colors.scrollUpColor};
  border-radius: 50rem;
  width: 3.2rem;
  height: 3.2rem;
  z-index: 1000;
  cursor: pointer;
  transition: 0.3s linear;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
  }

  @media (min-width: 1440px) {
    right: 3.2rem;
    width: 4.8rem;
    height: 4.8rem;
    border: 1px solid ${(p) => p.theme.colors.accentColor};
    animation: ${backgroundAnimation} 3s linear infinite;
  }

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.accentColorLowOp};
    animation-play-state: paused;
    background-color: transparent;
  }

  &:hover {
    ${BMIHeaderText} {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }
`;
