import styled from "styled-components";
import heroImg from "@/assets/hero.jpg";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 60rem;
  padding: 3.2rem;
  background: url(${heroImg});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;

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
`;

export const HeroImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const HeroImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeroImg = styled.img`
  width: 60rem;
  height: auto;
  position: absolute;
  bottom: 0;
  z-index: 2;
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  height: 100%;
`;

export const HeroTitle = styled.h1`
  color: ${(p) => p.theme.colors.heroTextColor};
  font-family: DM Sans;
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;
`;

export const HeroText = styled.p`
  color: ${(p) => p.theme.colors.heroTextColor};
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
`;
