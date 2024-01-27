import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { primaryFont, secondaryFont } from "../fonts";

export const BackdropContainer = styled.div`
  visibility: ${(props) => (props?.$modalCard ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px;

  pointer-events: ${(props) => (props?.$modalCard ? "all" : "none")};
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.mainBackdropBgColor};
  opacity: ${(props) => (props?.$modalCard ? 1 : 0)};
  overflow: auto;
  z-index: 1000;
  backdrop-filter: blur(3px);

  @media (min-width: 1440px) {
    overflow: ${(props) => (props?.$modalCard ? "hidden" : "auto")};
  }
`;

export const ModalExerciseWrapper = styled.div`
  position: relative;

  left: 50%;
  transform: translate(-50%, 0) scale(1);

  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 20px;
  padding-left: 20px;
  color: ${(p) => p.theme.colors.mainTextColorRev};
  background-color: ${(p) => p.theme.colors.modalContainerColor};
  border-radius: 20px;
  z-index: 500;
  transition: transform 0.3s linear;
  will-change: transform;
  opacity: 1;

  @media (max-width: 767px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    width: 704px;
    display: flex;
    column-gap: 32px;
    position: absolute;
    top: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  @media (min-width: 1440px) {
    position: absolute;
    top: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    width: 708px;
  }
`;

export const CloseModalIcon = styled(IoMdClose)`
  color: ${(p) => p.theme.colors.mainTextColorRev};
  font-size: 2.4rem;
  top: 1.6rem;
  right: 1.6rem;
  position: absolute;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.starColor};
  }
`;

export const ModalExercisesImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ModalExercisesImageWrapper = styled.div`
  height: 258px;
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 270px;
    height: 260px;
  }
`;
export const ModalExercisesContentWrapper = styled.div`
  @media (min-width: 768px) {
    width: 338px;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1440px) {
    width: 342px;
  }
`;

export const ModalExercisesButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  column-gap: 8px;
  row-gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ExercisesModalTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  font-family: ${secondaryFont};

  @media (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1.33;
  }
`;

export const ExerciseModalRatingMenu = styled.ul`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  column-gap: 2px;
`;

export const ExercisesDetailsMenu = styled.ul`
  display: flex;
  margin-bottom: 20px;
  border-top: 1px solid ${(p) => p.theme.colors.inactiveColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.inactiveColor};
  padding-top: 10px;
  padding-bottom: 10px;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const ExercisesDetailName = styled.p`
  margin-bottom: 4px;
  color: ${(p) => p.theme.colors.secondaryWhiteTextColorLowOp};
  font-size: 12px;
  line-height: 1.5;
  font-family: ${secondaryFont};
`;

export const ExercisesDetailValue = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.286;
  font-family: ${primaryFont};
`;

export const ExercisesDescription = styled.p`
  color: ${(p) => p.theme.colors.secondaryWhiteTextColorLowOp};
  font-size: 14px;
  line-height: 1.286;
`;
