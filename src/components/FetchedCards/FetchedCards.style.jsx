import styled from "styled-components";

export const ExercisesSectionContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 80px;

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    gap: 64px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
  }
`;

export const ExerciseCardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
