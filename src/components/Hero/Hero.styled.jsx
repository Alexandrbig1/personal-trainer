import styled from "styled-components";
import heroImg from "@/assets/hero.jpg";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: auto;
  background: url(${heroImg});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem;

  display: grid;
  align-items: center;

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

  @media (min-width: 768px) {
    min-height: auto;
    padding: 3.2rem;
  }

  @media (min-width: 1440px) {
    min-height: 60rem;
    padding: 3.2rem;
  }
`;

export const HeroImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const HeroImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeroImg = styled.img`
  width: 19rem;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

  @media (min-width: 768px) {
    width: 35.2rem;
    height: auto;
    position: absolute;
    bottom: 0;
    z-index: 2;
    left: 1.2rem;
  }

  @media (min-width: 1440px) {
    width: 52rem;
    height: auto;
    position: absolute;
    bottom: 0;
    z-index: 2;
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    height: 100%;
  }
`;

export const HeroTitle = styled.h1`
  text-align: end;
  color: ${(p) => p.theme.colors.heroTextColor};
  font-family: DM Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    text-align: start;
    color: ${(p) => p.theme.colors.heroTextColor};
    font-family: DM Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
  }

  @media (min-width: 1440px) {
    color: ${(p) => p.theme.colors.heroTextColor};
    font-family: DM Sans;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
  }
`;

export const HeroText = styled.p`
  text-align: end;
  color: ${(p) => p.theme.colors.heroTextColor};
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  z-index: 5;
  margin-bottom: 1.2rem;

  @media (min-width: 768px) {
    text-align: start;
    font-size: 16px;
    z-index: 5;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
