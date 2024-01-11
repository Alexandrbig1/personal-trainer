import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;

  @media (min-width: 375px) {
    max-width: 37.5rem;
  }

  @media (min-width: 768px) {
    max-width: 76.8rem;
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const FooterContainer = styled.footer`
  padding: 6.4rem 3.2rem 1.6rem;
  background-color: ${(p) => p.theme.colors.footerBgColor};
`;

export const Section = styled.section`
  margin-bottom: 8.6rem;
`;

export const SectionExercise = styled(Section)`
  padding: 40px 0 80px;

  @media (min-width: 768px) {
    padding: 64px 0 100px;
  }

  @media (min-width: 1440px) {
    padding-bottom: 132px;
  }
`;

// export const ExercisesSectionContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 80px;

//   @media (min-width: 768px) {
//     gap: 64px;
//   }

//   @media (min-width: 1440px) {
//     flex-direction: row;
//     gap: 32px;
//   }
// `;

// export const ExerciseCardsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

export const Line = styled.div`
  height: 0.1px;
  max-width: 100%;
  background-color: ${(p) => p.theme.colors.accentColor};
  margin: 0 24rem;
`;
