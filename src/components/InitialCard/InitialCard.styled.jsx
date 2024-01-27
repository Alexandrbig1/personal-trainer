import styled from "styled-components";
import { primaryFont } from "../fonts";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

export const ExerciseCardsMenu = styled.ul`
  @media (max-width: 374px) {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
    margin-right: 20px;
    row-gap: 20px;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    width: 335px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    row-gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    display: grid;
    width: 705px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 225px;
    row-gap: 32px;
    column-gap: 16px;
    align-items: center;
  }

  @media (min-width: 1440px) {
    display: grid;
    width: 900px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-auto-rows: 242px;
    row-gap: 32px;
    column-gap: 16px;
  }
`;

export const ExerciseItem = styled.li`
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s linear;

  @media (max-width: 374px) {
    width: 100%;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    height: 225px;
    width: 335px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    height: 225px;
    width: 225px;
  }

  @media (min-width: 1440px) {
    height: 242px;
    width: 290px;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 12px;
    background-image: linear-gradient(
      0deg,
      ${(p) => p.theme.colors.darkGradientCards} 0%,
      ${(p) => p.theme.colors.darkGradientCards} 100%
    );
    opacity: 0.7;
    z-index: 1;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const ExerciseCardsImage = styled.img`
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 374px) {
    width: 100%;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    height: 225px;
    width: 335px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    height: 225px;
    width: 225px;
  }

  @media (min-width: 1440px) {
    height: 242px;
    width: 290px;
  }
`;

export const ExerciseCardsInfoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.colors.mainBgColor};
  font-family: sans-serif;
`;

export const ExerciseCardsTitle = styled.h3`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  color: ${(p) => p.theme.colors.initialCardTextColor};
  font-family: ${primaryFont};

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ExerciseCardsText = styled.p`
  text-align: center;
  color: ${(p) => p.theme.colors.initialCardTextColor};
`;
