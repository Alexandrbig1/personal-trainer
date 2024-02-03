import styled from "styled-components";
import img from "@/assets/hero.jpg";

export const NotFoundContainer = styled.div`
  background: url(${img});
  min-height: 54rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  border-radius: 1.2rem;
  overflow: hidden;
  z-index: 1;

  position: relative;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 4.8rem;
  width: 100%;
  max-width: 90rem;
  background-color: ${(p) => p.theme.colors.secondaryBgColor};
  border-radius: 1.2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#000, #000);
    opacity: 0.7;
    z-index: -5;
  }

  @media (min-width: 1440px) {
    max-width: 90rem;
  }
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

export const NotFoundMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
`;
