import styled from "styled-components";
import heroImg from "@/assets/hero.jpg";
import { robotoFont, secondaryFont } from "../fonts";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: auto;
  background: url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem 0 1.2rem 1.2rem;
  border-radius: 1.2rem;
  overflow: hidden;

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

  @media (min-width: 375px) {
    padding: 1.2rem;
  }

  @media (min-width: 768px) {
    background-size: 100%;
    min-height: auto;
    padding: 3.2rem;
    overflow: visible;
  }

  @media (min-width: 1440px) {
    min-height: 60rem;
    padding: 3.2rem;
  }
`;

export const HeroImgWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: none;
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
  width: 27rem;

  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

  @media (min-width: 334px) {
    width: 30rem;
  }

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
  order: -1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  height: 100%;
  padding: 1.2rem;

  @media (min-width: 375px) {
    gap: 2.4rem;
  }

  @media (min-width: 768px) {
    order: 0;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    width: 100%;
    height: 100%;
    padding: 0;
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
  text-align: start;
  color: ${(p) => p.theme.colors.heroTextColor};
  font-family: ${robotoFont};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;

  @media (min-width: 375px) {
    font-size: 15px;
  }

  @media (min-width: 768px) {
    color: ${(p) => p.theme.colors.heroTextColor};
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
  }

  @media (min-width: 1440px) {
    color: ${(p) => p.theme.colors.heroTextColor};
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
  }
`;

export const HeroText = styled.p`
  text-align: start;
  color: ${(p) => p.theme.colors.heroTextColor};
  font-family: ${secondaryFont};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  z-index: 5;

  @media (min-width: 334px) {
    margin-bottom: 1.6rem;
  }

  @media (min-width: 358px) {
    margin-bottom: 2.2rem;
  }

  @media (min-width: 375px) {
    font-size: 12px;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    z-index: 5;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
