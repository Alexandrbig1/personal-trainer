import styled from "styled-components";
import { primaryFont, secondaryFont } from "../fonts";

export const QuotesWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 16px;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const QuotesContainer = styled.div`
  background-color: ${(p) => p.theme.colors.mainTextColor};
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  max-width: 336px;
  display: flex;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 40px;
    width: 100%;
    max-width: 400px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 444px;
  }
`;

export const QuotesImageWrapper = styled.div`
  width: 100%;
  max-width: 336px;
  height: auto;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 288px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 444px;
    height: 242px;
  }
`;

export const QuotesImageSlideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  /* height: 350px; */

  width: 100%;
  max-width: 336px;
  height: auto;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 288px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 444px;
    height: 242px;
  }
`;

export const QuotesInfo = styled.div`
  background-color: ${(p) => p.theme.colors.aboutBgColor};
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  max-width: 336px;
  display: flex;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 40px;
    width: 100%;
    max-width: 400px;
    margin-top: 16px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 444px;
    margin-top: 0;
  }
`;

export const QuotesIconWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.mainTextColor};
  border-radius: 50%;
  width: 34px;
  height: 32px;
  fill: ${(p) => p.theme.colors.initialCardTextColor};
  background-color: ${(p) => p.theme.colors.secondaryWhiteTextColorLowOp};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
`;
export const QuotesIconLogo = styled.svg`
  width: 100%;
  height: 100%;
`;
export const QuotesTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;
export const QuotesTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
export const QuotesTitle = styled.h3`
  color: ${(p) => p.theme.colors.mainBgColor};
  font-family: ${secondaryFont};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`;
export const QuoteIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(p) => p.theme.colors.mainBgColor};

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const QuotesText = styled.p`
  color: ${(p) => p.theme.colors.secondaryWhiteTextColorLowOp};
  font-family: ${primaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 2px;
  }
`;
export const QuotesAuthor = styled.span`
  color: ${(p) => p.theme.colors.mainBgColor};
  font-family: ${primaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const QuotesImage = styled.img`
  border-radius: 20px;
  width: 100%;
`;

export const QuotesInfoWrapper = styled.div`
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.mainTextColor};
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${(p) => p.theme.colors.mainBgColor};
`;

export const QuotesGymIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

export const QuotesWorkoutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const QuotesWorkoutTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const QuotesWorkoutTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${primaryFont};
  font-size: 20px;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`;
export const QuotesWorkoutSubTitle = styled.span`
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
  font-family: ${secondaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;
