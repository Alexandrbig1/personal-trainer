import styled from "styled-components";
import { FaStar } from "react-icons/fa6";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { TbBarbell } from "react-icons/tb";
import { sansFont } from "../fonts";

export const ExercisesMenuWrapper = styled.ul`
  @media (max-width: 374px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
    margin-right: 20px;
    row-gap: 20px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
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
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 141px;
    row-gap: 32px;
    column-gap: 16px;
    align-items: center;
  }

  @media (min-width: 1440px) {
    display: grid;
    width: 900px;
    grid-template-columns: 1fr 1fr;
    row-gap: 32px;
    column-gap: 16px;
  }
`;

export const ExercisesItems = styled.li`
  cursor: pointer;
  text-decoration: none;
  font-family: sans-serif;
  border-radius: 15px;
  padding: 16px;
  background-color: ${(p) => p.theme.colors.whiteColor};
  transition: transform 0.5s ease;
  position: relative;

  @media (max-width: 374px) {
    width: 100%;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    width: 335px;
    height: 141px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 344px;
    height: 141px;
  }

  @media (min-width: 1440px) {
    width: 442px;
    height: 141px;
  }

  &:hover {
    transform: translate(0, -4px);
  }
`;

export const ExerciseWrapperFirstLine = styled.div`
  display: flex;
  align-items: center;
`;

export const ExerciseWorkoutText = styled.p`
  border: solid;
  border-radius: 15px;
  padding: 5px 8px;
  border-color: ${(p) => p.theme.colors.mainTextColor};
  border-width: 1px;
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  margin-right: 16px;
`;

export const ExerciseWorkoutRating = styled.p`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: DM Sans, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const ExerciseStarIcon = styled(FaStar)`
  margin-left: 2px;
  max-width: 18px;
  max-height: 18px;
  color: ${(p) => p.theme.colors.starColor};
`;

export const ExerciseArrow = styled(LiaLongArrowAltRightSolid)`
  max-width: 16px;
  max-height: 16px;
  color: ${(p) => p.theme.colors.mainTextColor};
  transition: 0.2s linear;
`;

export const ExerciseTextStart = styled.p`
  margin-left: auto;
  color: ${(p) => p.theme.colors.mainTextColor};
  margin-right: 0.8rem;

  &:hover {
    ${ExerciseArrow} {
      color: ${(p) => p.theme.colors.starColor};
      margin-right: -0.8rem;
    }
  }
`;

export const ExerciseWrapperSecondLine = styled.div`
  display: flex;
  margin-top: 25px;
  align-items: center;

  @media (min-width: 375px) and (max-width: 767px) {
    margin-top: 15px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    margin-top: 15px;
  }
`;

export const ExerciseCardTitleName = styled.h3`
  margin-left: 16px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${sansFont};

  @media (max-width: 374px) {
    font-size: 20px;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 20px;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 24px;
    line-height: 1.33;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 1.33;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const ExerciseWrapperThirdLine = styled.div`
  display: flex;
  width: 312px;

  @media (max-width: 374px) {
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

export const ExerciseCardsInfoMenu = styled.ul`
  display: flex;
  margin-top: 8px;
  width: 100%;

  @media (max-width: 374px) {
    line-height: 1;
    gap: 8px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    gap: 0;
  }

  @media (min-width: 1440px) {
    display: flex;
    gap: 16px;
  }
`;

export const ExerciseCardsInfoItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 374px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    align-items: start;
  }

  @media (min-width: 1440px) {
    align-items: center;
  }
`;

export const ExerciseCardsInfoText = styled.p`
  color: ${(p) => p.theme.colors.secondaryBlackTextColorLowOp};
  font-family: ${sansFont};
`;

export const ExerciseCardsInfoTextResult = styled.p`
  color: ${(p) => p.theme.colors.mainTextColor};
  margin-left: 4px;
  font-family: ${sansFont};

  @media (max-width: 374px) {
    width: 100%;
    margin-left: 0px;
    text-align: center;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    width: 32px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 32px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 1440px) {
    width: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const WorkoutIconWrapper = styled.div`
  width: 3.4rem;
  height: 3.4rem;
  padding: 0.6rem;
  background-color: ${(props) => props.theme.colors.mainTextColor};
  border-radius: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WorkoutIcon = styled(TbBarbell)`
  color: ${(props) => props.theme.colors.mainBgColor};
  width: 100%;
  height: 100%;
`;
