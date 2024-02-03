import styled from "styled-components";
import { primaryFont, robotoFont, sansFont } from "../fonts";

export const SlideCardsContainer = styled.div`
  border-radius: 1.2rem;
  background-color: ${(p) => p.theme.colors.iconsBgColorLowOp};
`;

export const SlideTextContainer = styled.div`
  width: 100%;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 1440px) {
    padding: 1.2rem 2.4rem;
  }
`;

export const SlideTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const SlideTextTitle = styled.h2`
  text-align: center;
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${primaryFont};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;

  padding-bottom: 1.2rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.accentColor};
`;

export const SlideTextTitleSub = styled.p`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${sansFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.27;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const SlideTextSmallCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 2.4rem;
  border-radius: 1.2rem;

  border-bottom: 0.1px solid ${(p) => p.theme.colors.accentColor};

  background-color: ${(p) => p.theme.colors.mainBgColor};

  @media (min-width: 1440px) {
    padding: 1.2rem;
  }
`;

export const SlideTextMenu = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 2.4rem;
    column-gap: 2.4rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;
  }
`;

export const SlideTextItems = styled.li`
  flex: 1 0 calc((100% / 2) - 16px);
`;

export const SlideIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  margin-bottom: 1.2rem;

  border-radius: 50rem;
  background-color: ${(p) => p.theme.colors.iconsBgColorLowOp};

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const SlideTextSvg = styled.svg`
  width: 4.4rem;
  height: 4.4rem;
`;

export const SlideItemsText = styled.p`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${robotoFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.26px;

  @media (min-width: 325px) {
    letter-spacing: 0px;
  }

  @media (min-width: 1440px) {
    line-height: 1;
    letter-spacing: -0.46px;
  }
`;

export const SlideItemsSubText = styled.p`
  color: ${(p) => p.theme.colors.secondaryBlackTextColorLowOp};
  font-family: ${robotoFont};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media (min-width: 1440px) {
    letter-spacing: -0.386px;
  }
`;
